import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Active = () => {
  const navigate = useNavigate();
  const closeDrawer = () => {
    navigate("/active");
  };

  return (
    <div>
      <div>Active</div>
      <Outlet context={{ closeDrawer }} />
    </div>
  );
};

export default Active;
