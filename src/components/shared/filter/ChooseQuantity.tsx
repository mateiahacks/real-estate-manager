import { useRef, useState } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { Button } from "../../ui";
import { useRealEstateFilter } from "../../../hooks/useRealEstateFilter";

interface ChooseQuantityProps {
  toggleIsOpen: () => void;
}

const ChooseQuantity = ({ toggleIsOpen }: ChooseQuantityProps) => {
  const { setFilters, bedrooms } = useRealEstateFilter();
  const [quantity, setQuantity] = useState<string>(bedrooms ? bedrooms : "");

  const ref = useRef(null);
  useOutsideClick(ref, toggleIsOpen);

  const filter = () => {
    if (!quantity) {
      return;
    }
    setFilters({ bedrooms: quantity });
    toggleIsOpen();
  };

  const onChange = (e: any) => {
    if (
      !Number.isInteger(Number(e.target.value)) ||
      e.target.value.includes(".")
    ) {
      return;
    }
    setQuantity(e.target.value);
  };

  return (
    <div
      ref={ref}
      className="flex flex-col gap-4 py-5 px-5 absolute 
    top-10 -left-1 w-[250px]
    bg-white z-10 border border-gray-1 shadow-md rounded-md"
    >
      <p className="text-sm">საძინებლების რაოდენობა</p>
      <div className="flex w-full h-fit">
        <input
          type="number"
          value={quantity}
          onChange={onChange}
          className="w-10 h-10 p-3 border border-gray-2 rounded-md text-center text-sm"
          min="0"
          step="1"
        />
      </div>
      <div className="w-full flex flex-row-reverse">
        <Button size={"sm"} className="mt-2" onClick={filter}>
          არჩევა
        </Button>
      </div>
    </div>
  );
};

export default ChooseQuantity;
