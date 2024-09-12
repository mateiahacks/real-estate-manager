import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const RealEstates = () => {
  const { items } = useSelector((state: RootState) => state.realEstates);

  return (
    <div className="flex flex-wrap gap-20 mt-3">
      {items.length === 0 && (
        <h3 className="text-gray-2 font-extralight m-3 mt-8">
          აღნიშნული მონაცემებით განცხადება არ იძებნება
        </h3>
      )}
    </div>
  );
};

export default RealEstates;
