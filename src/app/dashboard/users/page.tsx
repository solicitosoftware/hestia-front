import User from "@/users/components/User";
import style from "../../styles/dashboard.module.css";

export default function UsersPage() {
  return (
    <div id="companies" className={style.page}>
      <User />
    </div>
  );
}
