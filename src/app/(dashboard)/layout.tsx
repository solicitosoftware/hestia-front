import { Sidebar } from "../../components";
import { redirect } from "next/navigation";
import { namePath } from "../constants";
import { getuserSesion } from "../api/auth/[...nextauth]/actions";

interface Props {
  children: React.ReactNode;
}

export default async function DashboardLayout({ children }: Props) {
  const user = await getuserSesion();

  if (!user) {
    redirect(namePath.pathlogin);
  }

  return (
    <div id="container" className="flex w-full h-full">
      <Sidebar user={user} />
      <div className="w-full">{children}</div>
    </div>
  );
}
