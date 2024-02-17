import { districts } from "@prisma/client";
import DistrictCard from "./DistrictCard";

interface Props {
  districts: districts[];
}

const District = ({ districts }: Props) => {
  return (
    <div className="flex flex-wrap">
      {districts?.map((districts) => (
        <DistrictCard key={districts.id} district={districts} />
      ))}
    </div>
  );
};

export default District;
