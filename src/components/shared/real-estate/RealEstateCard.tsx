import { IRealEstate } from "../../../types";

interface RealEstateCardProps {
  card: IRealEstate;
}

const RealEstateCard = ({ card }: RealEstateCardProps) => {
  return (
    <div className="w-72 rounded-xl shadow-md cursor-pointer border border-gray-1">
      <div className="w-full relative">
        <div className="absolute top-4 left-4 px-2 py-1 rounded-2xl bg-transparent-black">
          <p className="text-white text-xs fira-go-light font-bold">
            {card.is_rental ? "ქირავდება" : "იყიდება"}
          </p>
        </div>
        <img
          src={card.image}
          alt="card-img"
          className="w-full object-center object-contain"
        />
      </div>
      <div className="flex flex-col gap-4 w-full px-3 py-4">
        <h4 className="text-3xl font-bold">
          {card.price.toLocaleString().split(",").join(" ")} ₾
        </h4>
        <div className="flex items-center gap-2">
          <img
            src="/assets/icons/location.png"
            alt="location"
            className="w-3"
          />
          <p className="text-xs text-gray-2">{`${card.city.name}, ${card.address}`}</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/assets/icons/bed.png" alt="bed" className="w-4" />
            <p className="text-xs text-gray-2">{card.bedrooms}</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/assets/icons/area.png" alt="area" className="w-3" />
            <p className="text-xs text-gray-2">{card.area} მ²</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/assets/icons/postal.png" alt="postal" className="w-3" />
            <p className="text-xs text-gray-2">{card.zip_code}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateCard;
