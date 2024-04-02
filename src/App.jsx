import React from "react";
import Main from "./views/Main/Main.jsx";
import Drawer from "./views/Main/containers/Drawer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExtractionMaps from "./views/Main/containers/ExtractionMaps.jsx";
import Entities from "./views/Main/containers/Entities.jsx";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <div>Header</div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="library" element={<Drawer />}>
            <Route path="extraction-maps" element={<ExtractionMaps />} />
            <Route path="entities" element={<Entities />} />
          </Route>
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <div>Footer</div>
    </BrowserRouter>
  );
};

export default App;
