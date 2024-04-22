import React, { Suspense, lazy, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

// components
import LibraryDrawer from "./views/Library/LibraryDrawer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExtractionMaps from "./views/Library/ExtractionMaps/ExtractionMaps.jsx";
import Entities from "./views/Library/Entities/Entities.jsx";
import Header from "./components/reusable/Layout/Header.jsx";
import Footer from "./components/reusable/Layout/Footer.jsx";
import NotExist404 from "./views/NotExist404/NotExist404.jsx";
import LoadingProgress from "./views/LoadingProgress/LoadingProgress.jsx";
import SubmissionFolderView from "./views/Documents/SubmissionFolderView.jsx";
import Active from "./views/SubmissionFolders/Active.jsx";
import Archive from "./views/SubmissionFolders/Archive.jsx";
import Documents from "./views/Documents/Documents.jsx";
import Automation from "./views/Documents/Automation.jsx";
const SubmissionFoldersList = lazy(
  () => import("./views/SubmissionFolders/SubmissionFoldersList.jsx"),
);

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <Suspense fallback={<LoadingProgress />}>
          <Routes>
            <Route index element={<Navigate to="/active" replace />} />
            <Route path="/*" element={<SubmissionFoldersList />}>
              <Route path="active" element={<Active />}>
                <Route path="library/*" element={<LibraryDrawer />} />
              </Route>
              <Route path="archive" element={<Archive />}>
                <Route path="library/*" element={<LibraryDrawer />} />
              </Route>
            </Route>
            <Route
              path="/submission-folders/:id/*"
              element={<SubmissionFolderView />}
            >
              <Route path="documents" element={<Documents />}>
                <Route path="library/*" element={<LibraryDrawer />} />
              </Route>
              <Route path="automation" element={<Automation />}>
                <Route path="library/*" element={<LibraryDrawer />} />
              </Route>
            </Route>
            <Route path="*" element={<NotExist404 />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
