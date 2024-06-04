import React from "react";

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <h1>Error 404</h1>
      <h4>Page Not Found</h4>
    </div>
  );
}

export default NotFound;
