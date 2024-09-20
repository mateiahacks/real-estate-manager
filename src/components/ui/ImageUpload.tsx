import React, { useEffect } from "react";
import { cn } from "../../lib/utils";
import { useFormContext } from "react-hook-form";
import { ERROR_MESSAGE, MAX_FILE_SIZE } from "../../lib/constants";

interface ImageUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  name: string;
  saveImage: (image: File) => void;
  clearImage: () => void;
  savedImage?: Blob | null;
  isModal?: boolean;
}

const ImageUpload = ({
  className,
  label,
  name,
  saveImage,
  savedImage,
  clearImage,
  isModal,
  ...props
}: ImageUploadProps) => {
  const form = useFormContext();

  const {
    formState: { isSubmitted },
  } = form;

  //const [file, setFile] = useState<any>(savedFile ? savedFile : null);
  const isMoreThan1mb = savedImage && savedImage?.size > MAX_FILE_SIZE;
  const isImageType: boolean = savedImage
    ? savedImage.type.includes("image")
    : true;

  const onChange = (e: any) => {
    // if (!e.target.files[0].type.includes("image")) {
    //   return;
    // }
    form.register(name).onChange(e);
    saveImage(e.target.files[0]);
  };

  const onRemoveImage = (e: any) => {
    e.stopPropagation();
    clearImage();
    form.resetField(name);
  };

  const onUploadClick = () => {
    document.getElementById(name)?.click();
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (isModal) clearImage();
    };

    // Add event listener for the `beforeunload` event
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      if (isModal) clearImage();
    };
  }, []);

  return (
    <div>
      <label className="text-xs">{label}</label>
      <div
        onClick={onUploadClick}
        className={cn(
          "flex items-center justify-center h-32 w-full mt-1 rounded-md px-3 py-2 text-xs",
          "border-gray-2 border-dashed border-2 resize-none cursor-pointer",
          (!savedImage && isSubmitted) || isMoreThan1mb || !isImageType
            ? "border-primary"
            : "border-gray-2",
          className
        )}
      >
        {!savedImage && <img src="/assets/icons/plus-circle.png" alt="plus" />}
        {savedImage && (
          <div className="relative">
            <img
              src={URL.createObjectURL(savedImage ?? new Blob())}
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
      {!isImageType && (
        <div className="flex items-center gap-1 mt-1">
          <p className="rule text-xs font-bold text-primary">
            {ERROR_MESSAGE.NOT_IMAGE}
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
