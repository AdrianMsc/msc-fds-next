import Sidebar from "@/layout/Sidebar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen pt-[64px] w-screen">
      <Sidebar />
      <div className="overflow-auto w-full pr-10 mx-auto">{children}</div>
    </div>
  );
}
