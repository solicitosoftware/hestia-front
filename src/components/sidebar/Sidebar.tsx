import Image from "next/image";
import { SidebarMenuItem } from "..";
import style from "./styles/Sidebar.module.css";
import { User } from "next-auth";
import { Logout } from "./Logout";
import { menuItems } from "./MenuItem";

interface Props {
  user: User | undefined;
}

export const Sidebar = ({ user }: Props) => {
  const rolUser = user?.roles?.find((x) => x)?.name;
  return (
    <div>
      <div id="sidebar" className={style.sidebar}>
        <div id="profile" className={style.profile}>
          <div className="space-y-3">
            <Image
              src={user?.image ?? ""}
              alt="Avatar user"
              priority
              width={40}
              height={40}
              className={style.image}
            />
            <div id="user-rol" className="flex flex-col">
              <h2 className={style["user-rol"]}>{user?.name}</h2>
              <p className={style.rol}>{rolUser}</p>
            </div>
          </div>
          <div id="menu" className={style.menu}>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.path} {...item} />
            ))}
          </div>
        </div>
        <Logout />
      </div>
    </div>
  );
};
