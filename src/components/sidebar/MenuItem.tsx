import { namePath } from "@/app/constants";
import { CiFries, CiShoppingCart } from "react-icons/ci";
import { GrCreditCard } from "react-icons/gr";
import { LuUserCheck } from "react-icons/lu";
import { VscCompass } from "react-icons/vsc";
import { BsBuildings } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { PiFactoryBold } from "react-icons/pi";
import { TbSitemap } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";

export const menuItems = [
  {
    path: namePath.pathMain,
    title: "Inicio",
    icon: <IoHomeOutline size={20} />,
  },
  {
    path: namePath.pathCompanies,
    title: "Compañias",
    icon: <PiFactoryBold size={20} />,
  },
  {
    path: namePath.pathUsers,
    title: "Usuarios",
    icon: <FiUsers size={20} />,
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
