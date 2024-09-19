import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { useFormContext } from "react-hook-form";
import { ERROR_MESSAGE } from "../../lib/constants";

interface ImageUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  name: string;
}

const ImageUpload = ({
  className,
  label,
  name,
  ...props
}: ImageUploadProps) => {
  const form = useFormContext();
  const [file, setFile] = useState<any>(null);

  const {
    formState: { isSubmitted },
  } = form;

  const isMoreThan1mb = file && file?.size > 1048576;

  const onChange = (e: any) => {
    form.register(name).onChange(e);
    setFile(e.target.files[0]);
  };

  const onRemoveImage = (e: any) => {
    e.stopPropagation();
    setFile(null);
    form.resetField(name);
  };

  const onUploadClick = () => {
    document.getElementById(name)?.click();
  };

  return (
    <div>
      <label className="text-xs">{label}</label>
      <div
        onClick={onUploadClick}
        className={cn(
          "flex items-center justify-center h-32 w-full mt-1 rounded-md px-3 py-2 text-xs",
          "border-gray-2 border-dashed border-2 resize-none cursor-pointer",
          (!file && isSubmitted) || isMoreThan1mb
            ? "border-primary"
            : "border-gray-2",
          className
        )}
      >
        {!file && <img src="/assets/icons/plus-circle.png" alt="plus" />}
        {file && (
          <div className="relative">
            <img
              src={URL.createObjectURL(file)}
              alt="avatar"
              className="w-24 h-24 object-contain object-center border rounded-md"
            />
            <div
              onClick={onRemoveImage}
              className="absolute -bottom-2 -right-2 bg-white border rounded-full p-1 border-gray-2"
            >
              <img
                src="/assets/icons/trash.png"
                alt="trash"
                className="w-4 h-4"
              />
            </div>
          </div>
        )}
      </div>
      {isMoreThan1mb && (
        <div className="flex items-center gap-1 mt-1">
          <img
            src="/assets/icons/tick-red.png"
            alt="tick"
            className="w-2 h-2"
          />
          <p className="rule text-xs font-bold text-primary">
            {ERROR_MESSAGE.FILE_SIZE}
          </p>
        </div>
      )}
      <input
        {...props}
        type="file"
        {...form?.register(name)}
        name={name}
        id={name}
        className="invisible"
        onChange={onChange}
        accept="image/*"
      />
    </div>
  );
};

export default ImageUpload;
