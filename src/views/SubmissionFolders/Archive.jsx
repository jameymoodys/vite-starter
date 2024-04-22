import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Archive = () => {
  const navigate = useNavigate();
  const closeDrawer = () => {
    navigate("/archive");
  };

  return (
    <div>
      <div>Archive</div>
      <Outlet context={{ closeDrawer }} />
    </div>
  );
};

export default Archive;
