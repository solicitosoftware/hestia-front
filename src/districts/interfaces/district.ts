// Generated by https://quicktype.io

export interface DistrictType {
  id: string;
  name: string;
  image: string;
  description: Description[];
}

export interface Description {
  name: string;
  icon?: string;
  cantidad?: number;
}
