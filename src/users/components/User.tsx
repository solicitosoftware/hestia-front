import { Pagination } from "@/components";
import { usersPagination } from "../interfaces";
import style from "../styles/User.module.css";
import UserTable from "./UserTable";

const tableItems = ["Usuarios", "Estado", "Roles", "Acciones"];

const User = ({ users, totalPage, currentPage }: usersPagination) => {
  return (
    <div className={style["container-table"]}>
      <UserTable users={users} title={tableItems} />
      <Pagination totalPage={totalPage} currentPage={currentPage} />
    </div>
  );
};

export default User;
