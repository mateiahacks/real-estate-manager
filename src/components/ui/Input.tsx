import { useFormContext } from "react-hook-form";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  rule?: string;
  name: string;
}

const Input = ({
  type,
  className,
  rule,
  label,
  name,
  ...props
}: InputProps) => {
  const form = useFormContext();
  const {
    formState: { errors },
    getValues,
  } = form;

  return (
    <div className={cn("h-10 w-full", className)}>
      {label && <label className="text-xs">{label}</label>}
      <input
        type={type}
        className={cn(
          "flex h-10 w-full mt-1 rounded-md px-3 py-2 text-xs border",
          errors[name] ? "border-primary" : "border-gray-2",
          className
        )}
        {...form?.register(name)}
        {...props}
      />
      {rule && !errors[name] && (
        <div className="flex items-center gap-1 mt-1">
          <img
            src={`/assets/icons/tick${getValues(name) ? "-green" : ""}.png`}
            alt="tick"
            className="w-2 h-2"
          />
          <p
            className={cn(
              "rule text-xs font-bold",
              getValues(name) ? "text-green" : ""
            )}
          >
            {rule}
          </p>
        </div>
      )}
      {errors[name] && (
        <div className="flex items-center gap-1 mt-1">
          <img
            src="/assets/icons/tick-red.png"
            alt="tick"
            className="w-2 h-2"
          />
          <p className="rule text-xs font-bold text-primary">
            {errors[name]?.message as string}
          </p>
        </div>
      )}
    </div>
  );
};

export default Input;
