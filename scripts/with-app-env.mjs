import { spawnSync } from "node:child_process";

const args = process.argv.slice(2);
const result = spawnSync(args[0], args.slice(1), {
  stdio: "inherit",
  shell: true,
});

process.exit(result.status ?? 1);
