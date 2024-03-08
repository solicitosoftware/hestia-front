import User from "@/users/components/User";
import style from "../../styles/dashboard.module.css";
import prisma from "@/lib/prisma";
import UserForm from "@/users/components/UserForm";
import { getuserSesion } from "@/app/api/auth/[...nextauth]/actions";
import Empty from "@/app/empty";
import { FiUsers } from "react-icons/fi";

export const metadata = {
  title: "Usuarios",
  description: "Listado de Usuarios",
};

export default async function UsersPage() {
  const user = await getuserSesion();

  const users = await prisma.user.findMany({
    orderBy: { name: "asc" },
    include: { roles: true },
  });

  const usersFilter = users?.filter((x) => x.id != user?.id);

  return usersFilter.length > 0 ? (
    <div id="users" className={style.page}>
      <UserForm />
      <User users={usersFilter} />
    </div>
  ) : (
    <div id="empty" className={style.empty}>
      <Empty title="usuarios" icon={<FiUsers size={50} />}>
        <UserForm />
      </Empty>
    </div>
  );
}
