import { Routes, Route } from "react-router-dom";
import RootLayout from "./root/RootLayout";

import "./globals.css";
import { Home } from "./root/pages";
import CreateRealEstate from "./root/pages/CreateRealEstate";
import RealEstateDetailsPage from "./root/pages/RealEstateDetailsPage";

const App = () => {
  return (
    <main className="md:flex h-full">
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/real-estate/:id" element={<RealEstateDetailsPage />} />
          <Route path="/create-real-estate" element={<CreateRealEstate />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
