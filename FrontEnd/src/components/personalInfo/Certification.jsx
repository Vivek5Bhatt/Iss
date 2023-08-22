import React from "react";
import { SplitObject } from "../../helpers/splitObject";

function Certification({ certification }) {
  // const { title, status, expiryDate, awardedBy, country } = certification;
  const arr = SplitObject(certification);
  return (
    <>
      <div className="education-card pt-15 ">
        <div className="table-cardbox">
          <div className="table-title primary-bgcolor">
            <h3 className="titlebx fs-14 white-color fw-600 secondary-font">
              Registration / Certification
            </h3>
          </div>
          <div className="cardbody-bxx">
            <div className="edu-innercard-bx smlcard-bx">
              <div className="education-card cardgreybx">
                <div className="row">
                  {arr.map((cert, i) => (
                    <div className="col-md-6" key={i}>
                      {Object.entries(cert).map(([key, value], index) => (
                        <div className="infocard-upper cstm-row" key={index}>
                          <span className="label-name titlebx fs-12 secondary-color fw-400">
                            {key} :
                          </span>
                          <span className="desc-name titlebx fs-12 secondary-color fw-700">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                  {/* <div className="col-md-6">
                    {status && (
                      <div className="infocard-upper cstm-row">
                        <span className="label-name titlebx fs-12 secondary-color fw-400">
                          Status:
                        </span>
                        <span className="desc-name titlebx fs-12 secondary-color fw-700">
                          {certification.status}
                        </span>
                      </div>
                    )}
                    {expiryDate && (
                      <div className="infocard-upper cstm-row">
                        <span className="label-name titlebx fs-12 secondary-color fw-400">
                          Expiry Date:
                        </span>
                        <span className="desc-name titlebx fs-12 secondary-color fw-700">
                          {expiryDate}{" "}
                        </span>
                      </div>
                    )}
                    {awardedBy && (
                      <div className="infocard-upper cstm-row">
                        <span className="label-name titlebx fs-12 secondary-color fw-400">
                          Awarded By:{" "}
                        </span>
                        <span className="desc-name titlebx fs-12 secondary-color fw-700">
                          {awardedBy}
                        </span>
                      </div>
                    )}
                    {country && (
                      <div className="infocard-upper cstm-row">
                        <span className="label-name titlebx fs-12 secondary-color fw-400">
                          Country:
                        </span>
                        <span className="desc-name titlebx fs-12 secondary-color fw-700">
                          {country}
                        </span>
                      </div>
                    )}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Certification;
