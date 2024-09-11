import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";

const RootLayout = () => {
  return (
    <div className="w-full flex-col">
      <Header />

      <section className="flex flex-1 h-full px-32">
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;
