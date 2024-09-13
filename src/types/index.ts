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

export interface IAgentSendData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface IAgent {
  id: number;
  name: string;
  surname: string;
  avatar: string;
}

export interface IDropdownItem {
  id: number;
  name: string;
}
