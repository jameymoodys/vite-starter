import React, { useEffect } from "react";
import Button from "../../components/Button";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ROUTER_LINKS } from "../../utils/routes";

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation(ROUTER_LINKS.LIBRARY);

  const open = location.pathname.includes(ROUTER_LINKS.LIBRARY);

  const openDrawer = () => navigate(ROUTER_LINKS.LIBRARY_EXTRACTION_MAPS);
  const closeDrawer = () => {
    navigate(ROUTER_LINKS.MAIN);
  };

  // Effect to add event listener for clicks outside the Drawer
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!document.querySelector(".drawer")?.contains(event.target)) {
        navigate(ROUTER_LINKS.MAIN);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]); // Only re-run if open var changes

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={closeDrawer}
        ></div>
      )}
      <div className="mx-2 flex items-center justify-between pt-2">
        <div>Submission Folders</div>
        <Button handleAction={openDrawer}>
          <div>Library</div>
        </Button>
      </div>
      <Outlet context={{ closeDrawer }} />
    </>
  );
};

export default Main;
