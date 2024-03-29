import Link from "next/link";
import { namePath } from "../../../constants";
import style from "@dashboard/styles/not-found.module.css";

export default function NotFound() {
  return (
    <main className={style.container}>
      <h1 className={style.error}>404</h1>
      <div className={style.message}>Producto No Encontrado</div>
      <div className={style["button-container"]}>
        <button className={style.button}>
          <Link href={namePath.pathProducts}>Reintentar</Link>
        </button>
      </div>
    </main>
  );
}
