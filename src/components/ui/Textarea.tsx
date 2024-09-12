import { cn } from "../../lib/utils";

export interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  label?: string;
  rule?: string;
}

const Textarea = ({ label, className, rule, ...props }: TextareaProps) => {
  return (
    <div>
      <label className="text-xs">{label}</label>
      <textarea
        {...props}
        className={cn(
          "flex h-32 w-full mt-1 rounded-md px-3 py-2 text-xs border border-gray-2 resize-none",
          className
        )}
      />
      <div className="flex items-center gap-1 mt-1">
        <img src="/assets/icons/tick.png" alt="tick" className="w-2 h-2" />
        <p className="rule text-xs font-bold">{rule}</p>
      </div>
    </div>
  );
};

export default Textarea;
