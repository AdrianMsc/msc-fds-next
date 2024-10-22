import Sidebar from "../components/Sidebar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen pt-[64px]">
      <Sidebar />
      <div className="overflow-auto">{children}</div>
    </div>
  );
}
