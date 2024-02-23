import { Sidebar } from "../../components";
import { redirect } from "next/navigation";
import { namePath } from "../constants";
import { getuserSesion } from "../api/auth/[...nextauth]/actions";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getuserSesion();

  if (!user) {
    redirect(namePath.pathlogin);
  }

  return (
    <div id="container" className="flex">
      <Sidebar user={user} />
      <div className="w-full">{children}</div>
    </div>
  );
}
