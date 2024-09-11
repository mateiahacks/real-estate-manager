import AreaDropdown from "./AreaDropdown";
import PriceDropdown from "./PriceDropdown";
import QuantityDropdown from "./QuantityDropdown";
import RegionDropdown from "./RegionDropdown";

const Filter = () => {
  return (
    <div className="flex gap-3 px-2 py-1 border border-gray-1 rounded-lg">
      <RegionDropdown />
      <PriceDropdown />
      <AreaDropdown />
      <QuantityDropdown />
    </div>
  );
};

export default Filter;
