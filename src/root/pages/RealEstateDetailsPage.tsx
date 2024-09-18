import { Link } from "react-router-dom";
import RealEstateDetails from "../../components/shared/real-estate/RealEstateDetails";

const RealEstateDetailsPage = () => {
  return (
    <div className="flex flex-col gap-3 w-full relative px-16">
      <Link to={"/"}>
        <img
          src="/assets/icons/left-arrow.png"
          alt="arrow"
          className="absolute -top-5 left-18 w-4 cursor-pointer"
        />
      </Link>
      <RealEstateDetails />
    </div>
  );
};

export default RealEstateDetailsPage;
