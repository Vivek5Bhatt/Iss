import React from "react";

function PositionSought({ positionData }) {
  const { positions, experience } = positionData;
  return (
    <>
      <div className="table-cardbox-outer">
        <div className="table-innercard">
          <div className="table-cardbox">
            <div className="table-title primary-bgcolor">
              <h3 className="titlebx fs-14 white-color fw-600 secondary-font">
                Positions Sought
              </h3>
            </div>
            {positions && positions.length && (
              <div className="table-body">
                <table className="table cstm-tablebx">
                  <thead>
                    <tr>
                      <th scope="col" className="w-44">
                        DEPARTMENT
                      </th>
                      <th scope="col" className="w-44">
                        SUBJECT
                      </th>
                      <th scope="col" className="w-100x">
                        YEARS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {positions.map((p, i) => (
                      <tr key={i}>
                        <td>{p.department} </td>
                        <td>{p.subject}</td>
                        <td>{p.years}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {experience.length &&
              experience.map((exp, i) => (
                <div className="innercard-detail" key={i}>
                  <div className="row">
                    {Object.entries(exp).map(([key, value], index) => (
                      <div className="col-md-12" key={index}>
                        <div className="innercard-detail-bx">
                          <div className="titlebx fs-12 fw-700 grey-color boder-bottom-grey">
                            {key}
                          </div>
                          <p className="subtitle fs-12 fw-700 secondary-color">
                            {value}
                          </p>
                        </div>
                      </div>
                    ))}
                    {/* {date && (
                  <div className="col-md-6">
                    <div className="innercard-detail-bx">
                      <div className="titlebx fs-12 fw-700 grey-color boder-bottom-grey">
                        DATE AVAILABLE
                      </div>
                      <p className="subtitle fs-12 fw-700 secondary-color">
                        {date}
                      </p>
                    </div>
                  </div>
                )} */}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PositionSought;
