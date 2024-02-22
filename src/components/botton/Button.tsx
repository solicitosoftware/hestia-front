import style from "./styles/Button.module.css";
import { ReactNode } from "react";

interface Props {
  name: string;
  type: "submit" | "reset" | "button";
  styleColor: "primary" | "delete" | "success";
  children?: ReactNode;
  onClick?: () => void;
}

export const Button = ({
  name,
  type,
  styleColor,
  children,
  onClick,
  ...buttonProps
}: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={style[styleColor]}
      {...buttonProps}
    >
      {children}
      {name}
    </button>
  );
};
