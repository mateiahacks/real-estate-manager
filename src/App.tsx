import { Routes, Route } from "react-router-dom";
import RootLayout from "./root/RootLayout";

import "./globals.css";
import { Home } from "./root/pages";
import RealEstateDetails from "./root/pages/RealEstateDetails";

const App = () => {
  return (
    <main className="md:flex h-screen">
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/real-estate/:id" element={<RealEstateDetails />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
