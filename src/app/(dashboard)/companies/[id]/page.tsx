import style from "@dashboard/styles/dashboard.module.css";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import CompanyCardDetail from "@/companies/components/CompanyCardDetail";
import { Metadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const company = await prisma.companies.findUnique({
    where: { id: Number(id) },
  });

  if (!company) {
    return {
      title: "Detalle Compañia",
      description: "Compañia no encontrada",
    };
  } else {
    return {
      title: `${company.name}`,
      description: `${company.email}`,
    };
  }
}

const getCompany = async (id: string) => {
  const company = await prisma.companies.findUnique({
    where: { id: Number(id) },
  });

  if (!company) notFound();
  return company;
};

export default async function CompanyPage({ params }: Props) {
  const company = await getCompany(params.id);

  return (
    <div id="company" className={style.page}>
      <CompanyCardDetail company={company} />
    </div>
  );
}
