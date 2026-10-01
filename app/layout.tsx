import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joker-X - Modern Store",
  description: "Premium storefront demo",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}