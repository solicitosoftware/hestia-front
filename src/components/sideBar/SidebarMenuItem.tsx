"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./styles/SidebarStyle.module.css";

interface MenuItemProps {
  path: string;
  title: string;
  icon: JSX.Element;
}

export const SidebarMenuItem = ({ path, title, icon }: MenuItemProps) => {
  const currentPath = usePathname();
  return (
    <Link
      href={path}
      className={`${style["menu-item"]}
      ${currentPath === path ? "text-cyan-600" : "text-gray-600"}`}
    >
      <div id="icon-menu">{icon}</div>
      <span className="ml-2">{title}</span>
    </Link>
  );
};
