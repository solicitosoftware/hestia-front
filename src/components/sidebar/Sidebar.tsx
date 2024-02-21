import Image from "next/image";
import { SidebarMenuItem } from "..";
import style from "./styles/Sidebar.module.css";
import { CiFries, CiShoppingCart } from "react-icons/ci";
import { GrCreditCard } from "react-icons/gr";
import { LuUserCheck } from "react-icons/lu";
import { VscCompass } from "react-icons/vsc";
import { BsBuildings } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { TbSitemap } from "react-icons/tb";
import { namePath } from "@/app/constants";

const menuItems = [
  {
    path: namePath.pathMain,
    title: "Inicio",
    icon: <IoHomeOutline size={20} />,
  },
  {
    path: namePath.pathDistricts,
    title: "Zonas",
    icon: <VscCompass size={20} />,
  },
  {
    path: namePath.pathProducts,
    title: "Productos",
    icon: <CiFries size={20} />,
  },
  {
    path: namePath.pathShopping,
    title: "Compras",
    icon: <CiShoppingCart size={20} />,
  },
  {
    path: namePath.pathApartments,
    title: "Apartamentos",
    icon: <BsBuildings size={20} />,
  },
  {
    path: namePath.pathCharacteristics,
    title: "Caracteristicas",
    icon: <TbSitemap size={20} />,
  },
  {
    path: namePath.pathPayments,
    title: "Pagos",
    icon: <GrCreditCard size={20} />,
  },
  {
    path: namePath.pathBookings,
    title: "Reservas",
    icon: <LuUserCheck size={20} />,
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
              priority
              width={40}
              height={40}
              className={style.image}
            />
            <div id="user-rol" className="flex flex-col">
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
