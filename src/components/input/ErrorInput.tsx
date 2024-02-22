import style from "./styles/Input.module.css";

export const ErrorInput = ({ children }: { children?: string }) => {
  return <p className={style.error}>{children}</p>;
};
