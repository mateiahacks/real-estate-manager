import { useToggle } from "../../../hooks/useToggle";
import ChoosePrice from "./ChoosePrice";
import FilterDropdownLabel from "./FilterDropdownLabel";

const PriceDropdown = () => {
  const [isOpen, toggleIsOpen] = useToggle(false);

  return (
    <div className="relative">
      <FilterDropdownLabel
        text="საფასო კატეგორია"
        isOpen={isOpen}
        toggleIsOpen={toggleIsOpen}
      />
      {isOpen && <ChoosePrice toggleIsOpen={toggleIsOpen} />}
    </div>
  );
};

export default PriceDropdown;
