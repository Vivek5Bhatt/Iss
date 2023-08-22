import React from "react";

function References({ data, index }) {
  // const { organization, name, refereeTitle, email, phone, startEnd } = data;
  return (
    <>
      <div className="col-md-6 pt-15 education-card">
        <div className="table-cardbox h-100">
          <div className="table-title primary-bgcolor">
            <h3 className="titlebx fs-14 white-color fw-600 secondary-font">
              Reference {index + 1}
            </h3>
          </div>
          <div className="cardbody-bxx">
            <div className="edu-innercard-bx">
              <div className="education-card">
                {Object.entries(data).map(([key, value], index) => (
                  <div className="infocard-upper cstm-row" key={index}>
                    <span className="label-name titlebx fs-12 secondary-color fw-400">
                      {key}:
                    </span>
                    <span className="desc-name titlebx fs-12 secondary-color fw-700">
                      {value}
                    </span>
                  </div>
                ))}
                {/* {name && (
                  <div className="infocard-upper cstm-row">
                    <span className="label-name titlebx fs-12 secondary-color fw-400">
                      Name:
                    </span>
                    <span className="desc-name titlebx fs-12 secondary-color fw-700">
                      {name}
                    </span>
                  </div>
                )}
                {refereeTitle && (
                  <div className="infocard-upper cstm-row">
                    <span className="label-name titlebx fs-12 secondary-color fw-400">
                      Referee Title:
                    </span>
                    <span className="desc-name titlebx fs-12 secondary-color fw-700">
                      {refereeTitle}
                    </span>
                  </div>
                )}
                {email && (
                  <div className="infocard-upper cstm-row">
                    <span className="label-name titlebx fs-12 secondary-color fw-400">
                      Email:
                    </span>
                    <span className="desc-name titlebx fs-12 secondary-color fw-700">
                      {email}
                    </span>
                  </div>
                )}
                {phone && (
                  <div className="infocard-upper cstm-row">
                    <span className="label-name titlebx fs-12 secondary-color fw-400">
                      Phone:
                    </span>
                    <span className="desc-name titlebx fs-12 secondary-color fw-700">
                      {phone}
                    </span>
                  </div>
                )}
                {startEnd && (
                  <div className="infocard-upper cstm-row">
                    <span className="label-name titlebx fs-12 secondary-color fw-400">
                      Start & End Date:
                    </span>
                    <span className="desc-name titlebx fs-12 secondary-color fw-700">
                      {startEnd}
                    </span>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default References;
