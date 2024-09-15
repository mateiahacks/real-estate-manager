import { Link } from "react-router-dom";
import { Filter } from "../../components/shared";
import RealEstates from "../../components/shared/RealEstates";
import { Button } from "../../components/ui";
import { useToggle } from "../../hooks/useToggle";
import AgentModal from "../../components/shared/AgentModal";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store";
import { getRealEstates } from "../../state/real-estates/realEstateSlice";
import { useEffect } from "react";

const Home = () => {
  const [showAgentModal, toggleShowAgentModal] = useToggle(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getRealEstates()); // Fetch real estates when page loads
  }, []);

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
          <Button
            variant={"secondary"}
            size={"lg"}
            onClick={toggleShowAgentModal}
          >
            <span className="text-lg mr-2">+</span>
            <p>აგენტის დამატება</p>
          </Button>
        </div>
      </div>
      <RealEstates />
      <AgentModal isOpen={showAgentModal} toggleIsOpen={toggleShowAgentModal} />
    </div>
  );
};

export default Home;
