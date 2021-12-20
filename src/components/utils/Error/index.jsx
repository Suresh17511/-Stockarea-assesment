import React from "react";
import "./error.css";

const Error = ({ error }) => {
  return (
    <div className="error">
      <div className="error_msg">
        <p>{error}</p>
      </div>
    </div>
  );
};

export default Error;
