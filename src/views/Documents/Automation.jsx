import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Automation = () => {
  const navigate = useNavigate();
  const closeDrawer = () => {
    navigate("/submission-folders/3/automation");
  };
  return (
    <div>
      <div>Automation</div>
      <Outlet context={{ closeDrawer }} />
    </div>
  );
};

export default Automation;
