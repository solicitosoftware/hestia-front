import User from "@/users/components/User";
import style from "@dashboard/styles/dashboard.module.css";
import prisma from "@/lib/prisma";
import UserForm from "@/users/components/UserForm";
import Empty from "@/app/empty";
import { FiUsers } from "react-icons/fi";
import { getUsersTakeAction } from "@/users/actions";
import { namePath } from "@/app/constants";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Usuarios",
  description: "Listado de Usuarios",
};

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function UsersPage({ searchParams }: Props) {
  const page = searchParams?.page ? Number(searchParams.page) : 1;

  const { users, currentPage, totalPage } = await getUsersTakeAction({ page });

  if (users.length === 0 && searchParams?.page) {
    redirect(namePath.pathUsers);
  }

  const roles = await prisma.roles.findMany();

  return users.length > 0 ? (
    <div id="users" className={style.page}>
      <UserForm roles={roles} />
      <User users={users} totalPage={totalPage} currentPage={currentPage} />
    </div>
  ) : (
    <div id="empty" className={style.empty}>
      <Empty title="usuarios" icon={<FiUsers size={50} />}>
        <UserForm roles={roles} />
      </Empty>
    </div>
  );
}
