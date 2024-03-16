import Company from "@/companies/components/Company";
import style from "@dashboard/styles/dashboard.module.css";
import CompanyForm from "@/companies/components/CompanyForm";
import { PiFactoryBold } from "react-icons/pi";
import Empty from "@/app/empty";
import { getCompaniesAction } from "@/companies/actions";

export const metadata = {
  title: "Compañias",
  description: "Listado de Compañias",
};

export default async function CompaniesPage() {
  const companies = await getCompaniesAction();

  return companies.length ? (
    <div id="companies" className={style.page}>
      <CompanyForm />
      <Company companies={companies} />
    </div>
  ) : (
    <div id="empty" className={style.empty}>
      <Empty title="compañias" icon={<PiFactoryBold size={50} />}>
        <CompanyForm />
      </Empty>
    </div>
  );
}
