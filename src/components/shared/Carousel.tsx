import { IRealEstate } from "../../types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RealEstateCard from "./real-estate/RealEstateCard";
import { cn } from "../../lib/utils";

interface CarouselProps {
  items: IRealEstate[];
  className?: string;
}

const widths: any = {
  2: "w-[600px]",
  3: "w-[900px]",
  4: "w-[1200px]",
};

const ArrowLeft = ({ ...props }) => {
  return (
    <img
      src="/assets/icons/left-arrow.png"
      alt="left-arrow"
      aria-hidden="true"
      className="slick-prev slick-arrow"
      {...props}
    />
  );
};

const ArrowRight = ({ ...props }) => {
  return (
    <img
      src="/assets/icons/right-arrow.png"
      alt="right-arrow"
      aria-hidden="true"
      className="slick-next slick-arrow"
      {...props}
    />
  );
};

const Carousel = ({ items, className }: CarouselProps) => {
  const settings = {
    infinite: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    speed: 300,
    slidesToShow: items.length < 4 ? items.length : 4,
    slidesToScroll: 1,
  };

  if (items.length === 1) {
    return <RealEstateCard card={items[0]} />;
  }

  return (
    <Slider
      {...settings}
      className={cn(
        className,
        items.length > 4 ? widths[4] : widths[items.length]
      )}
    >
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
