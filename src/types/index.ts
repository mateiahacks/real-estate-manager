export interface IRealEstate {
  address: string;
  image: string;
  region_id: number;
  description: string;
  city_id: number;
  zip_code: string;
  price: number;
  area: number;
  bedrooms: number;
  is_rental: boolean;
  agent_id: number;
}

export interface IDropdownItem {
  id: number;
  name: string;
}
