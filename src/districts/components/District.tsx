import { districts } from "@prisma/client";
import { DistrictCard } from "..";

interface Props {
  districts: districts[];
}

export const District = ({ districts }: Props) => {
  return (
    <div className="flex flex-wrap">
      {districts?.map((districts) => (
        <DistrictCard key={districts.id} district={districts} />
      ))}
    </div>
  );
};
