import React from "react";

function General({ data }) {
  return (
    <>
      <div className="cardbx-main general-cardbx pt-15">
        <div className="table-cardbox">
          <div className="table-title secondary-bgcolor">
            <h3 className="titlebx fs-14 white-color fw-600 secondary-font">
              General
            </h3>
          </div>
          <div className="cardbody-bxx">
            {Object.entries(data).map(([key, value], index) => (
              <div className="innercard-detail-bx" key={index}>
                <div className="titlebx fs-12 fw-700 grey-color boder-bottom-grey boder-dark">
                  {key}
                </div>
                <p className="subtitle fs-12 fw-400 secondary-color">{value}</p>
              </div>
            ))}
            {/* {monitoring && (
              <div className="innercard-detail-bx">
                <div className="titlebx fs-12 fw-700 grey-color boder-bottom-grey boder-dark">
                  IN WHAT AREAS COULD THE CANDIDATE BENEFIT FROM
                  COACHING/MONITORING?
                </div>
                <p className="subtitle fs-12 fw-400 secondary-color">
                  {monitoring}
                </p>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default General;
