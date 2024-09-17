import { useToggle } from "../../../hooks/useToggle";
import ChooseRange from "./ChooseRange";
import FilterDropdownLabel from "./FilterDropdownLabel";

const AreaDropdown = () => {
  const [isOpen, toggleIsOpen] = useToggle(false);

  return (
    <div className="relative">
      <FilterDropdownLabel
        text="ფართობი"
        isOpen={isOpen}
        toggleIsOpen={toggleIsOpen}
      />
      {isOpen && <ChooseRange toggleIsOpen={toggleIsOpen} type="area" />}
    </div>
  );
};

export default AreaDropdown;
