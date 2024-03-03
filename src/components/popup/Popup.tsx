import style from "./styles/Popup.module.css";

interface Props {
  isVisible: boolean;
  pointer?: boolean;
  title: string;
  position: {
    y: number;
    x: number;
  };
}

export const Popup = ({ isVisible, pointer, title, position }: Props) => {
  return (
    <div
      style={{ top: position.y, left: position.x }}
      className={`${style.position} ${
        isVisible ? "group-hover:flex" : "hidden"
      }`}
    >
      <div className={style.popup}>
        {pointer && (
          <div className={style["container-point"]}>
            <div className={style.point} />
          </div>
        )}
        {title}
      </div>
    </div>
  );
};
