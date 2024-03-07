import { ReactNode } from "react";
import style from "./styles/Pagination.module.css";
import Link from "next/link";

interface Props {
  active: number;
  pages: number;
}

export const Pagination = ({ active, pages }: Props) => {
  const Pages = () => {
    let result = new Set<ReactNode>();
    for (let index = 1; index <= pages; index++) {
      result.add(
        <li>
          <Link
            className={`${style.number} ${
              active === index ? "bg-complement text-white" : "text-title"
            }`}
            href="#"
          >
            {index}
          </Link>
        </li>
      );
    }

    return result;
  };
  return (
    <div className={style.pagination}>
      <nav>
        <ul className="flex">{Pages()}</ul>
      </nav>
    </div>
  );
};
