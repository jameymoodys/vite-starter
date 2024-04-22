import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Documents = () => {
  const navigate = useNavigate();
  const closeDrawer = () => {
    navigate("/submission-folders/3/documents");
  };
  return (
    <div>
      <div>Documents</div>
      <Outlet context={{ closeDrawer }} />
    </div>
  );
};

export default Documents;
