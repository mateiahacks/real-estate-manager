import { useRef } from "react";
import { useToggle } from "../../hooks/useToggle";
import { useGetRegions } from "../../lib/react-query/queries";
import { ICity, IDropdownItem } from "../../types";
import { Dropdown } from "../ui";
import DropdownItem from "./DropdownItem";
import useOutsideClick from "../../hooks/useOutsideClick";

interface RegionDropdownProps {
  region: IDropdownItem | null;
  setRegion: (region: IDropdownItem) => void;
  setCity: (city: ICity | null) => void;
}

const RegionDropdown = ({
  region,
  setRegion,
  setCity,
}: RegionDropdownProps) => {
  const { data: regions, isFetching } = useGetRegions();
  const [isOpen, toggleIsOpen] = useToggle(false);
  const ref = useRef(null);
  useOutsideClick(ref, toggleIsOpen); // should close on outside click

  const onSelect = (region: IDropdownItem) => {
    console.log("parapa");
    setRegion(region);
    setCity(null);
    toggleIsOpen();
  };

  return (
    <div className="w-full relative">
      <Dropdown label="რეგიონი" onClick={toggleIsOpen} selected={region} />
      {!isFetching && isOpen && (
        <div className="dropdown-data" ref={ref}>
          {regions.map((region: IDropdownItem) => (
            <DropdownItem onClick={() => onSelect(region)} key={region.id}>
              <p>{region.name}</p>
            </DropdownItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default RegionDropdown;
