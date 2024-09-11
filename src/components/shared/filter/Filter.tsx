import AreaDropdown from "./AreaDropdown";
import PriceDropdown from "./PriceDropdown";
import QuantityDropdown from "./QuantityDropdown";
import RegionDropdown from "./RegionDropdown";

const Filter = () => {
  return (
    <div className="flex flex-col gap-5 mb-3">
      <div className="flex gap-3 px-1 py-1 border border-gray-1 rounded-lg">
        <RegionDropdown />
        <PriceDropdown />
        <AreaDropdown />
        <QuantityDropdown />
      </div>
    </div>
  );
};

export default Filter;
