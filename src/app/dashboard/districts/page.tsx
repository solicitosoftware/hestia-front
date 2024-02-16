import { District, DistrictType } from "@/districts";

export const metadata = {
  title: "Zonas",
  description: "Listado de Zonas",
};

export default async function DistrictsPage() {
  return (
    <div className="relative mx-auto w-full">
      <District districts={[]} />
    </div>
  );
}
