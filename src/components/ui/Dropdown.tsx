import { cn } from "../../lib/utils";
import { IDropdownItem } from "../../types";

interface DropdownProps {
  label?: string;
  data?: IDropdownItem[];
  selected?: IDropdownItem;
  className?: string;
}

const Dropdown = ({ label, className }: DropdownProps) => {
  return (
    <div className={cn("h-10 w-full relative", className)}>
      <label className="text-xs">{label}</label>
      <div
        className={cn(
          "flex h-10 w-full mt-1 rounded-md px-3 py-2 text-xs border border-gray-2 relative cursor-pointer"
        )}
      >
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
