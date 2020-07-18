import React from "react";
import "./PageLoader.scss";

function PageLoader(props) {
  return (
    <div className="PageLoader" {...props}>
      <div className="loader is-loading"></div>
    </div>
  );
}

export default PageLoader;
