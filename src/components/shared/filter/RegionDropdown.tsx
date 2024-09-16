import { useGetRegions } from "../../../lib/react-query/queries";
import ChooseRegions from "./ChooseRegions";
import FilterDropdownLabel from "./FilterDropdownLabel";
import { IDropdownItem } from "../../../types";
import { useToggle } from "../../../hooks/useToggle";

const RegionDropdown = () => {
  const { data: regions } = useGetRegions();
  const [isOpen, toggleIsOpen] = useToggle(false);

  return (
    <div className="relative">
      <FilterDropdownLabel
        text="რეგიონი"
        isOpen={isOpen}
        toggleIsOpen={toggleIsOpen}
      />
      {isOpen && (
        <ChooseRegions
          regions={regions as IDropdownItem[]}
          toggleIsOpen={toggleIsOpen}
        />
      )}
    </div>
  );
};

export default RegionDropdown;
