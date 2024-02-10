import { Sidebar } from "@/components";
import Link from "next/link";
import { namePath } from "./interfaces";
import style from "./styles/NotFoundStyle.module.css";

export default function NotFound() {
  return (
    <div id="container" className="flex">
      <Sidebar />
      <main className={style.container}>
        <h1 className={style.error}>404</h1>
        <div className={style.message}>Page Not Found</div>
        <div className={style["button-container"]}>
          <button className={style.button}>
            <Link href={namePath.pathMain}>Ir al Inicio</Link>
          </button>
        </div>
      </main>
    </div>
  );
}
