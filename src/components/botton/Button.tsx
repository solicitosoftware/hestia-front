import style from "./styles/Button.module.css";

interface Props {
  name: string;
  type: "submit" | "reset" | "button";
  styleColor: "primary" | "delete" | "success" | "clear";
  children?: React.ReactNode;
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
