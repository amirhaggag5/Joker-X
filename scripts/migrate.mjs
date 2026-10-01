import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const { Client } = pg;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function runMigrations() {
  try {
    await client.connect();
    console.log('✅ Connected to database');

    // Create migrations table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS migrations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        run_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Read all migration files
    const migrationsDir = join(process.cwd(), 'supabase', 'migrations');
    const files = readdirSync(migrationsDir).filter(f => f.endsWith('.sql')).sort();

    for (const file of files) {
      // Check if migration has already run
      const result = await client.query(
        'SELECT * FROM migrations WHERE name = $1',
        [file]
      );

      if (result.rows.length === 0) {
        console.log(`🔄 Running migration: ${file}`);
        const filePath = join(migrationsDir, file);
        const sql = readFileSync(filePath, 'utf-8');

        // Split by semicolon and filter empty statements
        const statements = sql.split(';').filter(s => s.trim());

        for (const statement of statements) {
          try {
            await client.query(statement);
          } catch (err) {
            if (!err.message.includes('already exists')) {
              throw err;
            }
          }
        }

        await client.query(
          'INSERT INTO migrations (name) VALUES ($1)',
          [file]
        );
        console.log(`✅ Completed: ${file}`);
      } else {
        console.log(`⏭️  Skipped: ${file} (already run)`);
      }
    }

    console.log('✅ All migrations completed successfully!');
  } catch (error) {
    console.error('❌ Migration error:', error.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

runMigrations();
