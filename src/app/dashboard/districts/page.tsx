import styles from "../../styles/dashboard.module.css";
import District from "@/districts/components/District";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Zonas",
  description: "Listado de Zonas",
};

export default async function DistrictsPage() {
  const districts = await prisma.districts.findMany();

  return (
    <div id="districts" className={styles.page}>
      <District districts={districts} />
    </div>
  );
}
