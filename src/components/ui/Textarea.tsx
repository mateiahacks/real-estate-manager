import { cn } from "../../lib/utils";

export interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  label?: string;
}

const Textarea = ({ label, className, ...props }: TextareaProps) => {
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
    </div>
  );
};

export default Textarea;
