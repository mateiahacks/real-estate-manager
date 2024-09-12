import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ type, className, label, ...props }: InputProps) => {
  return (
    <div className="h-10 w-full">
      <label className="text-xs">{label}</label>
      <input
        type={type}
        className={cn(
          "flex h-10 w-full mt-1 rounded-md px-3 py-2 text-xs border border-gray-2",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
