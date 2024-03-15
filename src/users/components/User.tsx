import { Pagination } from "@/components";
import { users } from "../interfaces";
import style from "../styles/User.module.css";
import UserTable from "./UserTable";

interface Props {
  users: users[];
}

const tableItems = ["Usuarios", "Estado", "Roles", "Acciones"];

const User = ({ users }: Props) => {
  return (
    <div className={style["container-table"]}>
      <UserTable users={users} title={tableItems} />
      <Pagination pages={3} active={1} />
    </div>
  );
};

export default User;
