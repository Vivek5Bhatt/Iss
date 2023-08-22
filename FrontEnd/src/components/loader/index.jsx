import React from "react";

function Loader() {
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center loader-fix">
      <div className="spinner-border text-primary" role="status">
        {/* <span className="sr-only">Loading...</span> */}
      </div>
    </div>
  );
}

export default Loader;
