import { Link, useParams } from "react-router-dom";
import RealEstateDetails from "../../components/shared/real-estate/RealEstateDetails";
import {
  useGetRealEstate,
  useGetRealEstates,
} from "../../lib/react-query/queries";
import Carousel from "../../components/shared/Carousel";
import { IRealEstate } from "../../types";
import { useMemo } from "react";

const RealEstateDetailsPage = () => {
  const { id } = useParams();

  const realEstateQuery = useGetRealEstate(Number(id));
  const { data: realEstates, isFetching: isFetchingEstates } =
    useGetRealEstates();

  const { data: realEstate, isFetching: isFetchingEstate } = realEstateQuery;

  const filteredEstates: IRealEstate[] = useMemo(
    () =>
      realEstates
        ? realEstates.filter(
            (item: IRealEstate) =>
              item.city.region_id === realEstate?.city.region_id &&
              item.id !== realEstate.id
          )
        : [],
    [id, realEstate, realEstates]
  );

  return (
    <div className="flex flex-col gap-3 w-full relative px-16">
      <Link to={"/"}>
        <img
          src="/assets/icons/left-arrow.png"
          alt="arrow"
          className="absolute -top-5 left-18 w-4 cursor-pointer"
        />
      </Link>
      <RealEstateDetails query={realEstateQuery} />
      {realEstates && !isFetchingEstates && !isFetchingEstate && (
        <>
          <h1 className="mt-16 mb-5 text-3xl">ბინები მსგავს ლოკაციაზე</h1>
          {filteredEstates.length > 0 && <Carousel items={filteredEstates} />}
        </>
      )}
    </div>
  );
};

export default RealEstateDetailsPage;
