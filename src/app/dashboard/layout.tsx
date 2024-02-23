import { getServerSession } from "next-auth";
import { Sidebar } from "../../components";
import { redirect } from "next/navigation";
import { namePath } from "../constants";
import authOptions from "../api/auth/[...nextauth]/authOptions";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sesion = await getServerSession(authOptions);

  if (!sesion) {
    redirect(namePath.pathlogin);
  }

  return (
    <div id="container" className="flex">
      <Sidebar sesion={sesion} />
      <div className="w-full">{children}</div>
    </div>
  );
}
