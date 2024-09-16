import { useRealEstateFilter } from "../../../hooks/useRealEstateFilter";
import AreaDropdown from "./AreaDropdown";
import PriceDropdown from "./PriceDropdown";
import QuantityDropdown from "./QuantityDropdown";
import RegionDropdown from "./RegionDropdown";

const Filter = () => {
  const { regions, setFilters } = useRealEstateFilter();

  const removeRegion = (name: string) => {
    const arr = regions?.split(",");
    setFilters({ regions: arr?.filter((r) => r !== name) });
  };

  return (
    <div className="flex flex-col gap-5 mb-3">
      <div className="flex gap-3 px-1 py-1 border border-gray-1 rounded-lg">
        <RegionDropdown />
        <PriceDropdown />
        <AreaDropdown />
        <QuantityDropdown />
      </div>
      {regions && (
        <div className="flex items-center gap-3 mb">
          <div className="flex flex-col gap-2">
            {regions.split(",").map((region: string) => (
              <div
                key={region}
                className="text-[11px] text-text-color
                fira-go-light font-bold text-center gap-2
                border border-gray-1 px-2 py-1 rounded-3xl
                flex items-center justify-center w-fit 
                "
              >
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
        </div>
      )}
    </div>
  );
};

export default Filter;
