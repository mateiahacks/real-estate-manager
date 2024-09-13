import { useFormContext } from "react-hook-form";
import { cn } from "../../lib/utils";

export interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  label?: string;
  rule?: string;
  name: string;
}

const Textarea = ({
  label,
  className,
  rule,
  name,
  ...props
}: TextareaProps) => {
  const form = useFormContext();
  const {
    formState: { errors },
    getValues,
  } = form;
  return (
    <div>
      <label className="text-xs">{label}</label>
      <textarea
        {...props}
        className={cn(
          "flex h-32 w-full mt-1 rounded-md px-3 py-2 text-xs border border-gray-2 resize-none",
          errors[name] ? "border-primary" : "border-gray-2",
          className
        )}
        {...form?.register(name)}
      />
      {rule && !errors[name] && (
        <div className="flex items-center gap-1 mt-1">
          <img src="/assets/icons/tick.png" alt="tick" className="w-2 h-2" />
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

export default Textarea;
