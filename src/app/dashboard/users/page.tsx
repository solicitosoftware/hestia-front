import User from "@/users/components/User";
import style from "../../styles/dashboard.module.css";
import prisma from "@/lib/prisma";
import UserForm from "@/users/components/UserForm";

export const metadata = {
  title: "Usuarios",
  description: "Listado de Usuarios",
};

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { name: "asc" },
    include: { roles: true },
  });

  return (
    <div id="users" className={style.page}>
      <UserForm />
      <User users={users} />
    </div>
  );
}
