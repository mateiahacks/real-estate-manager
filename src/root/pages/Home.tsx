import { Link } from "react-router-dom";
import { Filter } from "../../components/shared";
import RealEstates from "../../components/shared/RealEstates";
import { Button } from "../../components/ui";

const Home = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="w-full flex flex-wrap justify-between items-center">
        <Filter />
        <div className="flex gap-3 items mb-3">
          <Link to={"/create-real-estate"}>
            <Button variant={"primary"} size={"lg"}>
              <span className="text-lg mr-2">+</span>
              <p>ლისტინგის დამატება</p>
            </Button>
          </Link>
          <Button variant={"secondary"} size={"lg"}>
            <span className="text-lg mr-2">+</span>
            <p>აგენტის დამატება</p>
          </Button>
        </div>
      </div>
      <RealEstates />
    </div>
  );
};

export default Home;
