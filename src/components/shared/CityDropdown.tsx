import { Dispatch, SetStateAction, useMemo, useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { useToggle } from "../../hooks/useToggle";
import { Dropdown } from "../ui";
import { useGetCities } from "../../lib/react-query/queries";
import DropdownItem from "./DropdownItem";
import { ICity, IDropdownItem } from "../../types";
import { cn } from "../../lib/utils";

interface CityDropdownProps {
  city: ICity | null;
  region: IDropdownItem | null;
  setCity: Dispatch<SetStateAction<ICity | null>>;
  className?: string;
}

const CityDropdown = ({
  city,
  setCity,
  region,
  className,
}: CityDropdownProps) => {
  const { data, isFetching } = useGetCities();
  const [isOpen, toggleIsOpen] = useToggle(false);
  const ref = useRef(null);
  useOutsideClick(ref, toggleIsOpen); // should close on outside click

  //optimising expensive operation with useMemo hook
  const citiesToDisplay: ICity[] = useMemo(
    () =>
      data ? data.filter((_city: ICity) => _city.region_id === region?.id) : [],
    [region]
  );

  const onSelect = (_city: ICity) => {
    setCity(_city);
    toggleIsOpen();
  };

  return (
    <div className={cn("w-full relative", className)}>
      <Dropdown label="ქალაქი" selected={city} onClick={toggleIsOpen} />
      {isOpen && !isFetching && (
        <div className="dropdown-data" ref={ref}>
          {citiesToDisplay.map((city: ICity) => (
            <DropdownItem onClick={() => onSelect(city)} key={city.id}>
              <p>{city.name}</p>
            </DropdownItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default CityDropdown;
