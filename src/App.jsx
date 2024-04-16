import React, { Suspense, lazy } from "react";
import Drawer from "./views/Main/containers/Drawer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExtractionMaps from "./views/Main/containers/ExtractionMaps/ExtractionMaps.jsx";
import Entities from "./views/Main/containers/Entities/Entities.jsx";
import Header from "./components/Layout/Header.jsx";
import Footer from "./components/Layout/Footer.jsx";
import NotExist404 from "./views/NotExist404/NotExist404.jsx";
import LoadingProgress from "./views/LoadingProgress/LoadingProgress.jsx";

const Main = lazy(() => import("./views/Main/Main.jsx"));

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Header />
      <main>
        <Suspense fallback={<LoadingProgress />}>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="library" element={<Drawer />}>
                <Route path="extraction-maps" element={<ExtractionMaps />} />
                <Route path="entities" element={<Entities />} />
              </Route>
            </Route>
            <Route path="*" element={<NotExist404 />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
