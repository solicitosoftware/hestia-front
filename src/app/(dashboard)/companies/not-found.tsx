import Link from "next/link";
import style from "@dashboard/styles/not-found.module.css";
import styleButton from "@/components/button/styles/Button.module.css";
import { namePath } from "@app/constants";

export default function NotFound() {
  return (
    <div id="container" className="flex">
      <main className={style.container}>
        <h1 className={style.error}>ERROR</h1>
        <h1 className={style.code}>404</h1>
        <div className={style.message}>Compañia no encontrada</div>
        <div className={style["button-container"]}>
          <button className={styleButton.primary}>
            <Link href={namePath.pathCompanies}>Volver atrás</Link>
          </button>
        </div>
      </main>
    </div>
  );
}
