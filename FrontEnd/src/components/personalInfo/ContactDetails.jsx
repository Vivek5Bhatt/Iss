import React from "react";

function ContactDetails({ contactDetails }) {
  // const { current, permanent } = contactDetails;
  return (
    <>
      <div className="innercardbx-body h-100">
        <div className="table-cardbox h-100">
          <div className="table-title primary-bgcolor">
            <h3 className="titlebx fs-14 white-color fw-600 secondary-font">
              Contact Details
            </h3>
          </div>
          <div className="cardbody-bxx">
            {Object.entries(contactDetails).map(([key, value], index) => (
              <div className="innercard-detail-bx" key={index}>
                <div className="titlebx fs-12 fw-700 grey-color boder-bottom-grey">
                  {key}
                </div>
                <p className="subtitle fs-12 fw-700 secondary-color">{value}</p>
              </div>
            ))}
            {/* {permanent && (
              <div className="innercard-detail-bx">
                <div className="titlebx fs-12 fw-700 grey-color boder-bottom-grey">
                  PERMANENT ADDRESS
                </div>
                <p className="subtitle fs-12 fw-700 secondary-color">
                  {permanent}
                </p>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
