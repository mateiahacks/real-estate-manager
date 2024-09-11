import { Outlet } from "react-router-dom";
import { Header } from "../components/shared";

const RootLayout = () => {
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
