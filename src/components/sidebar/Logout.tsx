"use client";

import { namePath } from "@/app/constants";
import style from "./styles/Sidebar.module.css";
import { IoLogOutOutline } from "react-icons/io5";
import { signOut } from "next-auth/react";
import { SidebarMenuItem } from "./SidebarMenuItem";

const logout = {
  path: "#",
  title: "Cerrar Sesión",
  icon: <IoLogOutOutline size={20} />,
};

export const Logout = () => {
  return (
    <div id="logout" className={style.logout} onClick={() => signOut()}>
      <hr />
      <SidebarMenuItem {...logout} />
    </div>
  );
};
