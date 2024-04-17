import React from "react";

const QueryStatus = ({ isLoading, isError, children }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return <>{children}</>;
};

export default QueryStatus;
