import { companies } from "@prisma/client";
import Link from "next/link";
import style from "../styles/Company.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { GoPencil } from "react-icons/go";

interface Props {
  company: companies;
}

const CompanyCard = ({ company }: Props) => {
  return (
    <li className={style.list}>
      <div className={style.information}>
        <div className={style["container-data"]}>
          <div className={style.data}>
            <h3 className={style.name}>{company.name}</h3>
            <span className={style.nit}>Nit: {company.nit}</span>
          </div>
          <p className={style.address}>Dirección: {company.address}</p>
        </div>
        <div className={style.icons}>
          <GoPencil className="cursor-pointer" size={15} />
          <AiOutlineDelete
            className="cursor-pointer"
            size={16}
            color="#D44421"
          />
        </div>
      </div>
      <div className={style.contact}>
        <div className={style["container-link"]}>
          <Link href={`mailto:${company.email}`} className={style.link}>
            <svg
              className={`h-5 w-5 ${
                company.email ? "text-primary" : "text-gray-400"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
            </svg>
            Correo
          </Link>
        </div>
        <div className={style["container-link"]}>
          <Link
            href={company.phone ? `tel:+57${company.phone}` : "#"}
            className={style.link}
          >
            <svg
              className={`h-5 w-5 ${
                company.phone ? "text-primary" : "text-gray-400"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                clipRule="evenodd"
              />
            </svg>
            Telefono
          </Link>
        </div>
      </div>
    </li>
  );
};

export default CompanyCard;
