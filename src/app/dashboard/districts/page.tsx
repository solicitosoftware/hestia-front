import { District, DistrictType } from "@/districts";

export const metadata = {
  title: "Zonas",
  description: "Listado de Zonas",
};

const getDistricts = async (): Promise<DistrictType[]> => {
  const data: DistrictType[] = await fetch(
    `http://localhost:3000/api/v1/districts`,
    {
      next: {
        revalidate: 10,
      },
    }
  )
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
    });

  return data;
};

export default async function DistrictsPage() {
  const districts = await getDistricts();
  return (
    <div className="relative mx-auto w-full">
      <District districts={districts} />
    </div>
  );
}
