import { IRealEstate } from "../../types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RealEstateCard from "./real-estate/RealEstateCard";

interface CarouselProps {
  items: IRealEstate[];
  className?: string;
}

const Carousel = ({ items, className }: CarouselProps) => {
  const settings = {
    infinite: true,
    prevArrow: <img src="/assets/icons/left-arrow.png" alt="left-arrow" />,
    nextArrow: <img src="/assets/icons/right-arrow.png" alt="right-arrow" />,
    speed: 300,
    slidesToShow: items.length < 4 ? items.length : 4,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className={className}>
      {items.map((item) => (
        <RealEstateCard
          card={item}
          className="lg:w-[280px] h-[320px]"
          key={item.id}
        />
      ))}
    </Slider>
  );
};

export default Carousel;
