import { useRef, useState } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { AREAS, ERROR_MESSAGE, PRICES } from "../../../lib/constants";
import { Button } from "../../ui";
import { cn } from "../../../lib/utils";
import { useRealEstateFilter } from "../../../hooks/useRealEstateFilter";

interface ChooseRangeProps {
  toggleIsOpen: () => void;
  type: string;
}

const ChooseRange = ({ toggleIsOpen, type }: ChooseRangeProps) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const isError = Number(from) > Number(to) && from && to;

  const MOCK_DATA = type === "price" ? PRICES : AREAS;

  const { setFilters } = useRealEstateFilter();

  const ref = useRef(null);
  useOutsideClick(ref, toggleIsOpen);

  const filter = () => {
    if (!from || !to || isError) {
      return;
    }
    setFilters(
      type === "price"
        ? { priceFrom: from, priceTo: to }
        : { areaFrom: from, areaTo: to }
    );
    toggleIsOpen();
  };

  return (
    <div
      ref={ref}
      className="flex flex-col gap-4 py-4 px-3 absolute 
    top-10 -left-1 w-[300px]
    bg-white z-10 border border-gray-1 shadow-md rounded-md"
    >
      <p className="text-sm figa-go-light ml-2">
        {type === "price" ? "ფასის" : "ფართობის"} მიხედვით
      </p>
      <div className="flex items-center gap-2">
        <div className="relative">
          <input
            type="number"
            placeholder="დან"
            className={cn(
              "filter-price-input",
              isError ? "border-primary" : ""
            )}
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <p className="absolute top-3 right-2 text-gray-2">
            {type === "price" ? "₾" : "მ²"}
          </p>
        </div>

        <div className="relative">
          <input
            type="number"
            placeholder="მდე"
            className={cn(
              "filter-price-input",
              isError ? "border-primary" : ""
            )}
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <p className="absolute top-3 right-2 text-gray-2">
            {type === "price" ? "₾" : "მ²"}
          </p>
        </div>
      </div>
      {isError && (
        <p className="rule text-xs font-bold text-primary -mt-2 ml-1">
          {ERROR_MESSAGE.VALIDATION}
        </p>
      )}
      <div className="flex items-center gap-2 mt-2">
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm text-center">
            მინ. {type === "price" ? "ფასი" : "მ²"}
          </label>
          {MOCK_DATA.map((price) => (
            <div
              key={price}
              className="filter-price"
              onClick={() => setFrom(price.toString())}
            >
              {price.toLocaleString()} {type === "price" ? "₾" : "მ²"}
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm text-center">
            მაქს. {type === "price" ? "ფასი" : "მ²"}
          </label>
          {MOCK_DATA.map((price) => (
            <div
              key={price}
              className="filter-price"
              onClick={() => setTo(price.toString())}
            >
              {price.toLocaleString()} {type === "price" ? "₾" : "მ²"}
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

export default ChooseRange;
