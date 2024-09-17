import { useRef, useState } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { ERROR_MESSAGE, PRICES } from "../../../lib/constants";
import { Button } from "../../ui";
import { cn } from "../../../lib/utils";
import { useRealEstateFilter } from "../../../hooks/useRealEstateFilter";

interface ChoosePriceProps {
  toggleIsOpen: () => void;
}

const ChoosePrice = ({ toggleIsOpen }: ChoosePriceProps) => {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  const isError = Number(priceFrom) > Number(priceTo) && priceFrom && priceTo;

  const { setFilters } = useRealEstateFilter();

  const ref = useRef(null);
  useOutsideClick(ref, toggleIsOpen);

  const filter = () => {
    if (!priceFrom || !priceTo || isError) {
      return;
    }
    setFilters({ priceFrom: priceFrom, priceTo: priceTo });
    toggleIsOpen();
  };

  return (
    <div
      ref={ref}
      className="flex flex-col gap-4 py-4 px-3 absolute 
    top-10 -left-1 w-[300px]
    bg-white z-10 border border-gray-1 shadow-md rounded-md"
    >
      <p className="text-sm figa-go-light ml-2">ფასის მიხედვით</p>
      <div className="flex items-center gap-2">
        <div className="relative">
          <input
            type="number"
            placeholder="დან"
            className={cn(
              "filter-price-input",
              isError ? "border-primary" : ""
            )}
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value)}
          />
          <p className="absolute top-3 right-2 text-gray-2">₾</p>
        </div>

        <div className="relative">
          <input
            type="number"
            placeholder="მდე"
            className={cn(
              "filter-price-input",
              isError ? "border-primary" : ""
            )}
            value={priceTo}
            onChange={(e) => setPriceTo(e.target.value)}
          />
          <p className="absolute top-3 right-2 text-gray-2">₾</p>
        </div>
      </div>
      {isError && (
        <p className="rule text-xs font-bold text-primary -mt-2 ml-1">
          {ERROR_MESSAGE.VALIDATION}
        </p>
      )}
      <div className="flex items-center gap-2 mt-2">
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm text-center">მინ. ფასი</label>
          {PRICES.map((price) => (
            <div
              key={price}
              className="filter-price"
              onClick={() => setPriceFrom(price.toString())}
            >
              {price.toLocaleString()} ₾
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm text-center">მაქს. ფასი</label>
          {PRICES.map((price) => (
            <div
              key={price}
              className="filter-price"
              onClick={() => setPriceTo(price.toString())}
            >
              {price.toLocaleString()} ₾
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-row-reverse">
        <Button size={"sm"} className="mr-2 mt-2" onClick={filter}>
          არჩევა
        </Button>
      </div>
    </div>
  );
};

export default ChoosePrice;
