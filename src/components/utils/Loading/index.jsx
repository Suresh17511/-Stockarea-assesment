import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading_spinner">
        <div className="spinner-grow text-primary"></div>
      </div>
    </div>
  );
};

export default Loading;
