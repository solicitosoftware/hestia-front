import Company from "@/companies/components/Company";
import style from "../../styles/dashboard.module.css";
import prisma from "@/lib/prisma";
import CompanyForm from "@/companies/components/CompanyForm";
import { PiFactoryBold } from "react-icons/pi";
import Empty from "@/app/empty";

export const metadata = {
  title: "Compañias",
  description: "Listado de Compañias",
};

export default async function CompaniesPage() {
  const companies = await prisma.companies.findMany({
    orderBy: { name: "asc" },
  });

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
