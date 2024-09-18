import { Link } from "react-router-dom";
import RealEstateDetails from "../../components/shared/real-estate/RealEstateDetails";
import { useGetRealEstates } from "../../lib/react-query/queries";
import Carousel from "../../components/shared/Carousel";

const RealEstateDetailsPage = () => {
  const { data: realEstates, isFetching } = useGetRealEstates();

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
      <h1 className="mt-16 mb-5 text-3xl">ბინები მსგავს ლოკაციაზე</h1>

      {(realEstates || !isFetching) && <Carousel items={realEstates} />}
    </div>
  );
};

export default RealEstateDetailsPage;
