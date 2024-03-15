"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./styles/Sidebar.module.css";
import { useState } from "react";
import { Popup } from "../popup/Popup";

interface MenuItemProps {
  path: string;
  title: string;
  icon: JSX.Element;
}

export const SidebarMenuItem = ({ path, title, icon }: MenuItemProps) => {
  const currentPath = usePathname();
  const [popupInfo, setPopupInfo] = useState({
    isVisible: false,
    position: {
      y: 0,
      x: 0,
    },
  });

  const handleMouseEnter = (event: any) => {
    if (window.innerWidth < 768) {
      const rect = event.target.getBoundingClientRect();
      const position = { y: rect.y - 6, x: rect.x + 32 };
      setPopupInfo({
        isVisible: true,
        position,
      });
    }
  };

  const handleMouseLeave = () => {
    setPopupInfo({ ...popupInfo, isVisible: false });
  };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link
        href={path}
        className={`${style["menu-item"]}
      ${currentPath.includes(path) ? "text-cyan-600" : "text-gray-600"}`}
      >
        <div id="menu-icon">{icon}</div>
        <span id="menu-title" className={style["menu-title"]}>
          {title}
        </span>
      </Link>
      <Popup
        title={title}
        isVisible={popupInfo.isVisible}
        pointer
        position={popupInfo.position}
      />
    </div>
  );
};
