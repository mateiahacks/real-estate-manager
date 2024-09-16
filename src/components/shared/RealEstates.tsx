import RealEstateCard from "./real-estate/RealEstateCard";
import { useRealEstateFilter } from "../../hooks/useRealEstateFilter";
import { useGetRealEstates } from "../../lib/react-query/queries";
import { IRealEstate } from "../../types";
import { useMemo } from "react";

const RealEstates = () => {
  const { data: items, isFetching: isLoading } = useGetRealEstates();
  const { regions } = useRealEstateFilter();

  const filteredItems: IRealEstate[] = useMemo(
    () =>
      regions
        ? items?.filter((item: any) =>
            regions.split(",").includes(item?.city?.region?.name ?? "")
          )
        : items,
    [items, regions]
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
        filteredItems.map((card) => (
          <RealEstateCard card={card} key={card.id} />
        ))}
    </div>
  );
};

export default RealEstates;
