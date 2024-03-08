import style from "./styles/empty.module.css";

interface Props {
  title: string;
  icon: JSX.Element;
  children?: React.ReactNode;
}

export default function Empty({ title, icon, children }: Props) {
  return (
    <div className={style.container}>
      <div className={style["container-icon"]}>
        <div className={style.icon}>{icon}</div>
      </div>
      <h3 className={style.title}>{title}</h3>
      <div className={style.text}>
        <p>El módulo de {title} se encuentra vacío. Para comenzar</p>
        <p>¡Haz clic en el botón de crear!</p>
      </div>
      <div className={style.button}>{children}</div>
    </div>
  );
}
