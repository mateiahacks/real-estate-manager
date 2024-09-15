import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import RealEstateCard from "./real-estate/RealEstateCard";

const RealEstates = () => {
  const { items, isLoading } = useSelector(
    (state: RootState) => state.realEstates
  );

  return (
    <div className="flex flex-wrap gap-6 mt-5">
      {!isLoading && items.length === 0 && (
        <h3 className="text-gray-2 font-extralight m-3 mt-8">
          აღნიშნული მონაცემებით განცხადება არ იძებნება
        </h3>
      )}
      {isLoading && <h1 className="text-xl">Loading...</h1>}
      {!isLoading && items.map((card) => <RealEstateCard card={card} />)}
    </div>
  );
};

export default RealEstates;
