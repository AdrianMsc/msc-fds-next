import type { Metadata } from "next";
import "./globals.css";
import MscLogo from "@/assets/MscLogo";
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
        <header className="bg-white overflow-hidden shadow p-5 flex w-full fixed">
          <MscLogo />
        </header>
        <main className="pt-20 pb-10 px-10">{children}</main>
      </body>
    </html>
  );
}
