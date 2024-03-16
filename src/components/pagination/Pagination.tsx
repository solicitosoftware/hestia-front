import { ReactNode } from "react";
import style from "./styles/Pagination.module.css";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Props {
  currentPage: number;
  totalPage: number;
}

export const Pagination = ({ currentPage, totalPage }: Props) => {
  const preview = () => {
    return currentPage > 2 ? currentPage - 1 : 1;
  };

  const next = () => {
    return currentPage < totalPage ? currentPage + 1 : totalPage;
  };

  const Pages = () => {
    let result: ReactNode[] = [];
    let startPage = currentPage;
    let endPage = currentPage + 2;

    if (currentPage + 2 > totalPage) {
      endPage = totalPage;
      startPage = Math.max(1, totalPage - 2);
    }
    for (let index = startPage; index <= endPage; index++) {
      result.push(
        <li key={`page_${index}`}>
          <Link
            className={`${style.options} ${
              currentPage === index ? "bg-complement text-white" : "text-title"
            }`}
            href={`?page=${index}`}
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
      <nav className={style.navigation}>
        <ul>
          <Link
            className={`${style.options} ${
              currentPage === 1 && "cursor-not-allowed opacity-50"
            }`}
            href={`?page=${preview()}`}
          >
            <IoIosArrowBack />
          </Link>
        </ul>
        <ul className="flex">{Pages()}</ul>
        <ul>
          <Link
            className={`${style.options} ${
              currentPage === totalPage && "cursor-not-allowed opacity-50"
            }`}
            href={`?page=${next()}`}
          >
            <IoIosArrowForward />
          </Link>
        </ul>
      </nav>
    </div>
  );
};
