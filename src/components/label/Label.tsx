import style from "./styles/Label.module.css";

export const Label = ({ children }: { children?: string }) => {
  return <p className={style.label}>{children}</p>;
};
