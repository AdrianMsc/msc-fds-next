import type { Metadata } from "next";
import "./globals.css";
import MscLogo from "@/assets/MscLogo";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Fuel Design System",
  description: "MSC Design System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex">
          <header className="bg-white overflow-hidden shadow p-5 flex w-screen fixed">
            <Link href="/">
              <MscLogo />
            </Link>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
