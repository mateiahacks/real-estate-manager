import { useToggle } from "../../../hooks/useToggle";
import ChooseQuantity from "./ChooseQuantity";
import FilterDropdownLabel from "./FilterDropdownLabel";

const QuantityDropdown = () => {
  const [isOpen, toggleIsOpen] = useToggle(false);

  return (
    <div className="relative">
      <FilterDropdownLabel
        text="საძინებლების რაოდენობა"
        isOpen={isOpen}
        toggleIsOpen={toggleIsOpen}
      />
      {isOpen && <ChooseQuantity toggleIsOpen={toggleIsOpen} />}
    </div>
  );
};

export default QuantityDropdown;
