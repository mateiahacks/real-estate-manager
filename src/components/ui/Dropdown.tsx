import { useFormContext } from "react-hook-form";
import { cn } from "../../lib/utils";
import { IDropdownItem } from "../../types";

interface DropdownProps {
  label?: string;
  data?: IDropdownItem[];
  selected?: IDropdownItem | null;
  className?: string;
  onClick?: () => void;
}

const Dropdown = ({ label, className, onClick, selected }: DropdownProps) => {
  const {
    formState: { isSubmitted },
  } = useFormContext();

  return (
    <div className={cn("h-10 w-full relative", className)} onClick={onClick}>
      <label className="text-xs">{label}</label>
      <div
        className={cn(
          "flex items-center h-10 w-full mt-1 rounded-md px-3 py-2 text-xs border border-gray-2 relative cursor-pointer",
          !selected && isSubmitted ? "border-primary" : "border-gray-2"
        )}
      >
        <label className="dropdown-item text-xs font-bold">
          {selected ? selected.name : "აირჩიე"}
        </label>
        <img
          src="/assets/icons/arrow.png"
          alt="arrow"
          className={cn("absolute right-2 top-4 w-2 h-1")}
        />
      </div>
      {!selected && isSubmitted && (
        <div className="flex items-center gap-1 mt-1">
          <img
            src="/assets/icons/tick-red.png"
            alt="tick"
            className="w-2 h-2"
          />
          <p className="rule text-xs font-bold text-primary">სავალდებულო</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
