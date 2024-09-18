import { useNavigate, useParams } from "react-router-dom";
import { useDeleteRealEstate } from "../../../lib/react-query/queries";
import { formatDate } from "../../../lib/utils";
import RealEstateAttribute from "./RealEstateAttribute";
import Agent from "./Agent";
import { Button } from "../../ui";
import ConfirmationModal from "../ConfirmationModal";
import { useToggle } from "../../../hooks/useToggle";
import { UseQueryResult } from "@tanstack/react-query";
import { IRealEstate } from "../../../types";

interface RealEstateDetailsProps {
  query: UseQueryResult<IRealEstate, Error>;
}

const RealEstateDetails = ({ query }: RealEstateDetailsProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isFetching } = query;
  const { mutateAsync, isPending } = useDeleteRealEstate();

  const [showConfirmation, toggleShowConfirmation] = useToggle(false);

  const onDelete = async () => {
    if (!id) {
      return;
    }
    await mutateAsync(Number(id));
    navigate("/");
  };

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
        <div className="absolute top-7 left-8 px-3 py-1 font-bold rounded-2xl bg-transparent-black flex">
          <p className="text-white text-xs fira-go-light mb-[1px]">
            {data.is_rental ? "ქირავდება" : "იყიდება"}
          </p>
        </div>
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
        <Button
          variant={"gray"}
          className="w-fit"
          onClick={toggleShowConfirmation}
        >
          ლისტინგის წაშლა
        </Button>
      </div>
      <ConfirmationModal
        isOpen={showConfirmation}
        toggleIsOpen={toggleShowConfirmation}
        onApprove={onDelete}
        isPending={isPending}
      />
    </div>
  );
};

export default RealEstateDetails;
