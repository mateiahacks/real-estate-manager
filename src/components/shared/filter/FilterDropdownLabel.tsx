import { cn } from "../../../lib/utils";

interface FilterDropdownLabelProps {
  text: string;
  isOpen: boolean;
  toggleIsOpen: () => void;
}

const FilterDropdownLabel = ({
  text,
  isOpen,
  toggleIsOpen,
}: FilterDropdownLabelProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-3 py-1 rounded-md text-sm cursor-pointer hover:bg-gray-3",
        isOpen ? "bg-gray-3" : ""
      )}
      onClick={toggleIsOpen}
    >
      <p>{text}</p>
      <img
        src="/assets/icons/arrow.png"
        alt="arrow"
        className={cn("w-2 h-1", isOpen ? "rotate-180" : "")}
      />
    </div>
  );
};

export default FilterDropdownLabel;
