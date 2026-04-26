import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeskTeam360 — Stop Outsourcing. Start Insourcing.",
  description:
    "Agencies, startups, and growing businesses use our team to handle the work they don't have time for.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-brand antialiased">{children}</body>
    </html>
  );
}
