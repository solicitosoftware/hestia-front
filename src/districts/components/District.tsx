import { DistrictCard, DistrictType } from "..";

interface Props {
  districts: DistrictType[];
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
