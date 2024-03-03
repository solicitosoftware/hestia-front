import CompanyCard from "./CompanyCard";
import { companies } from "@prisma/client";
import style from "../styles/Company.module.css";

interface Props {
  companies: companies[];
}

const Company = ({ companies }: Props) => {
  return (
    <ul className={style.container}>
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </ul>
  );
};

export default Company;
