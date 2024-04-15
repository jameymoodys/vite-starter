import React from "react";
import Main from "./views/Main/Main.jsx";
import Drawer from "./views/Main/containers/Drawer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExtractionMaps from "./views/Main/containers/ExtractionMaps/ExtractionMaps.jsx";
import Entities from "./views/Main/containers/Entities/Entities.jsx";
import Header from "./components/Layout/Header.jsx";
import Footer from "./components/Layout/Footer.jsx";
import NotExist404 from "./views/NotExist404/NotExist404.jsx";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="library" element={<Drawer />}>
              <Route path="extraction-maps" element={<ExtractionMaps />} />
              <Route path="entities" element={<Entities />} />
            </Route>
          </Route>
          <Route path="*" element={<NotExist404 />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
