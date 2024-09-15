export interface IRealEstate {
  id: number;
  address: string;
  image: string;
  region_id: number;
  description: string;
  city_id: number;
  city: ICity;
  zip_code: string;
  price: number;
  area: number;
  bedrooms: number;
  is_rental: boolean;
  agent_id: number;
}

export interface IAgent extends IDropdownItem {
  surname: string;
  avatar: string;
}

export interface ICity extends IDropdownItem {
  region_id: number;
  region?: IDropdownItem;
}

export interface IDropdownItem {
  id: number;
  name: string;
}
