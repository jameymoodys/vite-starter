import React from "react";

const QueryStatus = ({ isLoading, isError, children }) => {
  if (isLoading) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <div>Something went wrong. Please try again.</div>
      </div>
    );
  }

  return <>{children}</>;
};

export default QueryStatus;
