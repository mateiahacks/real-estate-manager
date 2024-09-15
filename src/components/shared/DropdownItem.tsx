import React from "react";
import { cn } from "../../lib/utils";

interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const DropdownItem = ({ children, onClick, className }: DropdownItemProps) => {
  return (
    <div
      onClick={onClick ? onClick : () => {}}
      className={cn(
        "dropdown-item px-4 py-3 text-xs font-bold",
        "w-full cursor-pointer border border-b-gray-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export default DropdownItem;
