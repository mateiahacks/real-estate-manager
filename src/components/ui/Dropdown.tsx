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
  return (
    <div className={cn("h-10 w-full relative", className)} onClick={onClick}>
      <label className="text-xs">{label}</label>
      <div
        className={cn(
          "flex items-center h-10 w-full mt-1 rounded-md px-3 py-2 text-xs border border-gray-2 relative cursor-pointer"
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
    </div>
  );
};

export default Dropdown;
