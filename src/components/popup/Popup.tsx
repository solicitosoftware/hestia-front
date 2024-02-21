import style from "./styles/Popup.module.css";

interface Props {
  isVisible: boolean;
  title: string;
  position: number;
}

export const Popup = ({ isVisible, title, position }: Props) => {
  return (
    <div
      style={{ top: position }}
      className={`${style.position} ${
        isVisible ? "group-hover:flex" : "hidden"
      }`}
    >
      <div className={style.popup}>
        <div className={style["container-point"]}>
          <div className={style.point} />
        </div>
        {title}
      </div>
    </div>
  );
};
