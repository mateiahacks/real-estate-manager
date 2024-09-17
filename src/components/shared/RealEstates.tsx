import RealEstateCard from "./real-estate/RealEstateCard";
import { useRealEstateFilter } from "../../hooks/useRealEstateFilter";
import { useGetRealEstates } from "../../lib/react-query/queries";
import { IRealEstate } from "../../types";
import { useMemo } from "react";

const RealEstates = () => {
  const { data: items, isFetching: isLoading } = useGetRealEstates();
  const { regions, priceFrom, priceTo } = useRealEstateFilter();

  const isAnyFilter = regions || (priceFrom && priceTo);

  const filteredItems: IRealEstate[] = useMemo(
    () =>
      isAnyFilter && items
        ? items.filter(
            (item: IRealEstate) =>
              regions?.split(",").includes(item?.city?.region?.name ?? "") ||
              (item.price >= Number(priceFrom) && item.price <= Number(priceTo))
          )
        : items,
    [items, regions, priceFrom, priceTo]
  );
  return (
    <div className="flex flex-wrap gap-8 mt-5">
      {!isLoading && filteredItems?.length === 0 && (
        <h3 className="text-gray-2 font-extralight m-3 mt-8">
          აღნიშნული მონაცემებით განცხადება არ იძებნება
        </h3>
      )}
      {isLoading && <h1 className="text-xl">Loading...</h1>}
      {!isLoading &&
        filteredItems?.map((card) => (
          <RealEstateCard card={card} key={card.id} />
        ))}
    </div>
  );
};

export default RealEstates;
