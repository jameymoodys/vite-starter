import React from "react";
import Main from "./views/Main/Main.jsx";
import Drawer from "./views/Main/containers/Drawer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExtractionMaps from "./views/Main/containers/ExtractionMaps.jsx";
import Entities from "./views/Main/containers/Entities.jsx";
import Header from "./components/Layout/Header.jsx";
import Footer from "./components/Layout/Footer.jsx";

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
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
