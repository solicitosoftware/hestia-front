import Company from "@/companies/components/Company";
import style from "../../styles/dashboard.module.css";
import prisma from "@/lib/prisma";
import CompanyForm from "@/companies/components/CompanyForm";

export const metadata = {
  title: "Compañias",
  description: "Listado de Compañias",
};

export default async function CompaniesPage() {
  const companies = await prisma.companies.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <div id="companies" className={style.page}>
      <CompanyForm />
      <Company companies={companies} />
    </div>
  );
}
