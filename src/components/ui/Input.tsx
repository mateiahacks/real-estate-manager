import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  rule?: string;
}

const Input = ({ type, className, rule, label, ...props }: InputProps) => {
  return (
    <div className={cn("h-10 w-full", className)}>
      {label && <label className="text-xs">{label}</label>}
      <input
        type={type}
        className={cn(
          "flex h-10 w-full mt-1 rounded-md px-3 py-2 text-xs border border-gray-2",
          className
        )}
        {...props}
      />
      {rule && (
        <div className="flex items-center gap-1 mt-1">
          <img src="/assets/icons/tick.png" alt="tick" className="w-2 h-2" />
          <p className="rule text-xs font-bold">{rule}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
