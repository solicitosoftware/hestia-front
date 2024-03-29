import Link from "next/link";
import { namePath } from "./constants";
import style from "@/app/styles/not-found.module.css";
import styleButton from "@/components/button/styles/Button.module.css";

export default function NotFound() {
  return (
    <div id="container" className="flex">
      <main className={style.container}>
        <h1 className={style.error}>ERROR</h1>
        <h1 className={style.code}>404</h1>
        <div className={style.message}>Pagina no encontrada</div>
        <div className={style["button-container"]}>
          <button className={styleButton.delete}>
            <Link href={namePath.pathMain}>Ir al inicio</Link>
          </button>
        </div>
      </main>
    </div>
  );
}
