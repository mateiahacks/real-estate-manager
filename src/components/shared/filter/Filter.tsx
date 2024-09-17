import { useRealEstateFilter } from "../../../hooks/useRealEstateFilter";
import AreaDropdown from "./AreaDropdown";
import PriceDropdown from "./PriceDropdown";
import QuantityDropdown from "./QuantityDropdown";
import RegionDropdown from "./RegionDropdown";

const Filter = () => {
  const {
    regions,
    priceFrom,
    priceTo,
    areaFrom,
    areaTo,
    setFilters,
    deleteFilter,
  } = useRealEstateFilter();

  const isAnyFilter = regions || (priceFrom && priceTo) || (areaFrom && areaTo);

  const removeRegion = (name: string) => {
    const arr = regions?.split(",");
    setFilters({ regions: arr?.filter((r) => r !== name) });
  };

  const removePriceFilter = () => {
    deleteFilter("priceFrom");
    deleteFilter("priceTo");
  };

  const removeAreaFilter = () => {
    deleteFilter("areaFrom");
    deleteFilter("areaTo");
  };

  const clearFilter = () => {
    deleteFilter("priceFrom");
    deleteFilter("priceTo");
    deleteFilter("areaFrom");
    deleteFilter("areaTo");
    deleteFilter("regions");
  };

  return (
    <div className="flex flex-col gap-5 mb-3">
      <div className="flex gap-3 px-1 py-1 border border-gray-1 rounded-lg">
        <RegionDropdown />
        <PriceDropdown />
        <AreaDropdown />
        <QuantityDropdown />
      </div>
      <div className="flex gap-3 mb">
        {regions && (
          <div className="flex flex-col gap-2">
            {regions.split(",").map((region: string) => (
              <div key={region} className="filter-tag">
                <p>{region}</p>
                <img
                  src="/assets/icons/x.png"
                  alt="x"
                  className="cursor-pointer"
                  onClick={() => removeRegion(region)}
                />
              </div>
            ))}
          </div>
        )}
        {priceFrom && priceTo && (
          <div className="flex">
            <div className="filter-tag">
              <p>
                {priceFrom}₾ - {priceTo}₾
              </p>
              <img
                src="/assets/icons/x.png"
                alt="x"
                className="cursor-pointer"
                onClick={removePriceFilter}
              />
            </div>
          </div>
        )}
        {areaFrom && areaTo && (
          <div className="flex">
            <div className="filter-tag">
              <p>
                {areaFrom}მ² - {areaTo}მ²
              </p>
              <img
                src="/assets/icons/x.png"
                alt="x"
                className="cursor-pointer"
                onClick={removeAreaFilter}
              />
            </div>
          </div>
        )}
        {isAnyFilter && (
          <div
            onClick={clearFilter}
            className="flex items-center cursor-pointer ml-2 mt-1 h-fit"
          >
            <p className="text-xs">გასუფთავება</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
