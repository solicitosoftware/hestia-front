import { Sidebar } from "../../components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="container" className="flex">
      <Sidebar />
      <div className="p-2 w-full">{children}</div>
    </div>
  );
}
