import React, { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// components
import LibraryDrawer from "./views/Main/containers/LibraryDrawer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExtractionMaps from "./views/Main/containers/ExtractionMaps/ExtractionMaps.jsx";
import Entities from "./views/Main/containers/Entities/Entities.jsx";
import Header from "./components/Layout/Header.jsx";
import Footer from "./components/Layout/Footer.jsx";
import NotExist404 from "./views/NotExist404/NotExist404.jsx";
import LoadingProgress from "./views/LoadingProgress/LoadingProgress.jsx";
const Main = lazy(() => import("./views/Main/Main.jsx"));

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/">
        <Header />
        <main>
          <Suspense fallback={<LoadingProgress />}>
            <Routes>
              <Route path="/" element={<Main />}>
                <Route path="library" element={<LibraryDrawer />}>
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
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
