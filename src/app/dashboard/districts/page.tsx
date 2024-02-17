import District from "@/districts/components/District";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Zonas",
  description: "Listado de Zonas",
};

export default async function DistrictsPage() {
  const districts = await prisma.districts.findMany();

  return (
    <div className="relative mx-auto w-full">
      <District districts={districts} />
    </div>
  );
}
