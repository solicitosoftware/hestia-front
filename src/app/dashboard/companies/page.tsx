import Company from "@/companies/components/Company";
import style from "../../styles/dashboard.module.css";

export default function CompaniesPage() {
  return (
    <div id="companies" className={style.page}>
      <Company />
    </div>
  );
}
