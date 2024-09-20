import { useEffect, useState } from "react";
import { IAgent, ICity, IDropdownItem } from "../types";

export function useDropdownStorage() {
  const [savedRegion, setSavedRegion] = useState<IDropdownItem | null>(null);
  const [savedCity, setSavedCity] = useState<ICity | null>(null);
  const [savedAgent, setSavedAgent] = useState<IAgent | null>(null);
  const [isRental, setIsRental] = useState<boolean>(false);

  const saveRegion = (region: IDropdownItem | null) => {
    localStorage.setItem("region", JSON.stringify(region));
    setSavedRegion(region);
  };

  const saveCity = (city: ICity | null) => {
    localStorage.setItem("city", JSON.stringify(city));
    setSavedCity(city);
  };

  const saveAgent = (agent: IAgent | null) => {
    localStorage.setItem("agent", JSON.stringify(agent));
    setSavedAgent(agent);
  };

  const saveIsRental = (value: boolean) => {
    localStorage.setItem("is_rental", JSON.stringify(value));
    setIsRental(value);
  };

  const load = () => {
    const region = localStorage.getItem("region");
    const city = localStorage.getItem("city");
    const agent = localStorage.getItem("agent");
    const is_rental = localStorage.getItem("is_rental");
    if (region) {
      setSavedRegion(JSON.parse(region));
    }
    if (city) {
      setSavedCity(JSON.parse(city));
    }
    if (agent) {
      setSavedAgent(JSON.parse(agent));
    }
    if (is_rental) {
      setIsRental(JSON.parse(is_rental));
    }
  };

  useEffect(() => {
    load();
  }, []);

  return {
    saveRegion,
    saveCity,
    saveAgent,
    saveIsRental,
    isRental,
    savedCity,
    savedRegion,
    savedAgent,
  };
}
