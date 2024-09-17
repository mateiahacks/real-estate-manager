import { useToggle } from "../../../hooks/useToggle";
import ChoosRange from "./ChooseRange";
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
      {isOpen && <ChoosRange toggleIsOpen={toggleIsOpen} type="price" />}
    </div>
  );
};

export default PriceDropdown;
