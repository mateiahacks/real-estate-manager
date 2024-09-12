import { Outlet } from "react-router-dom";
import { Header } from "../components/shared";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AppDispatch } from "../state/store";
import { getRealEstates } from "../state/real-estates/realEstateSlice";

const RootLayout = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getRealEstates()); // Fetch real estates when page loads
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Header />

      <section className="flex flex-1 h-full md:px-28 py-14 px-8">
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;
