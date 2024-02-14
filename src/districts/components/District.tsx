import { DistrictCard, DistrictType } from "..";

interface Props {
  districts: DistrictType[];
}

export const District = ({ districts }: Props) => {
  return districts?.map((districts) => (
    <DistrictCard key={districts.id} district={districts} />
  ));
};
