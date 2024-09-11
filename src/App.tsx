import { Routes, Route } from "react-router-dom";
import RootLayout from "./root/RootLayout";

import "./globals.css";
import { Home } from "./root/pages";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
