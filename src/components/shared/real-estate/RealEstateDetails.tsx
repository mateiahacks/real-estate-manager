import { useParams } from "react-router-dom";
import { useGetRealEstate } from "../../../lib/react-query/queries";
import { formatDate } from "../../../lib/utils";
import RealEstateAttribute from "./RealEstateAttribute";
import Agent from "./Agent";
import { Button } from "../../ui";

const RealEstateDetails = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetRealEstate(Number(id));

  if (isFetching || !data) {
    return <p>Loading...</p>;
  }
  return (
    <div className="w-full flex gap-10">
      <div className="w-1/2 relative">
        <img
          src={data.image}
          alt=""
          className="w-full h-full object-cover rounded-t-md"
        />
        <p className="absolute right-0 -bottom-6 text-[12px] fira-go-light text-gray-2">
          გამოქვეყნების თარიღი {formatDate(data?.created_at ?? "")}
        </p>
      </div>
      <div className="flex flex-col gap-3 w-1/2">
        <h1 className="text-4xl mb-3 font-bold">
          {data.price.toLocaleString()} ₾
        </h1>
        <RealEstateAttribute
          icon="/assets/icons/location.png"
          content={`${data.city.name}, ${data.address}`}
        />
        <RealEstateAttribute
          icon="/assets/icons/area.png"
          content={`ფართი ${data.area} მ²`}
        />
        <RealEstateAttribute
          icon="/assets/icons/bed.png"
          content={`საძინებელი ${data.bedrooms}`}
        />
        <RealEstateAttribute
          icon="/assets/icons/postal.png"
          content={`საფოსტო ინდექსი ${data.zip_code}`}
        />
        <p className="text-[13px] text-gray-2 fira-go-light font-bold mt-5">
          {data.description}
        </p>
        <Agent agent={data.agent} />
        <Button variant={"gray"} className="w-fit">
          ლისტინგის წაშლა
        </Button>
      </div>
    </div>
  );
};

export default RealEstateDetails;
