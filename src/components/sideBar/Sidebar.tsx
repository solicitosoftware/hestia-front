import Image from "next/image";
import { SidebarMenuItem } from "..";
import style from "./SidebarStyle.module.css";
import { CiFries } from "react-icons/ci";
import { BiCategoryAlt } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";

const menuItems = [
  {
    path: "/dashboard/main",
    title: "Inicio",
    icon: <IoHomeOutline size={20} />,
  },
  {
    path: "/dashboard/categories",
    title: "Categorias",
    icon: <BiCategoryAlt size={20} />,
  },
  {
    path: "/dashboard/products",
    title: "Productos",
    icon: <CiFries size={20} />,
  },
];

export const Sidebar = () => {
  return (
    <div>
      <div id="sidebar" className={style.sidebar}>
        <div id="profile" className={style.profile}>
          <div className="space-y-3">
            <Image
              src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="Avatar user"
              width={40}
              height={40}
              className={style.image}
            />
            <div id="user-rol">
              <h2 className={style["user-rol"]}>Carlos Soto</h2>
              <p className={style.rol}>Administrator</p>
            </div>
          </div>
          <div id="menu" className={style.menu}>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.path} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
