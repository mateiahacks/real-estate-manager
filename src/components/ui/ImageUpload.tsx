import { useRef } from "react";
import { cn } from "../../lib/utils";

interface ImageUploadProps {
  className?: string;
  label?: string;
}

const ImageUpload = ({ className, label }: ImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onUploadClick = () => {
    inputRef.current?.click();
  };

  return (
    <div>
      <label className="text-xs">{label}</label>
      <div
        onClick={onUploadClick}
        className={cn(
          "flex items-center justify-center h-28 w-full mt-1 rounded-md px-3 py-2 text-xs",
          "border-gray-2 border-dashed border-2 resize-none cursor-pointer",
          className
        )}
      >
        <img src="/assets/icons/plus-circle.png" alt="plus" />
      </div>
      <input type="file" name="" className="invisible" ref={inputRef} />
    </div>
  );
};

export default ImageUpload;
