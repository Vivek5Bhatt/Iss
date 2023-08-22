import React from "react";
import { SplitObject } from "../../helpers/splitObject";

function Carrier({ carrier }) {
  return (
    <>
      <div className="education-card pt-15">
        <div className="table-cardbox">
          <div className="table-title primary-bgcolor">
            <h3 className="titlebx fs-14 white-color fw-600 secondary-font">
              Careers
            </h3>
          </div>
          <div className="cardbody-bxx">
            {carrier.map((c, i) => (
              <CarrierCard data={c} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Carrier;

export const CarrierCard = ({ data }) => {
  // const {
  //   jobTitle,
  //   nameofSchool,
  //   startDate,
  //   finishDate,
  //   jobType,
  //   curriculum,
  //   city,
  //   country,
  //   additional,
  // } = data;
  const { additional } = data
  const arr = SplitObject(data)
  return (
    <div className="edu-innercard-bx smlcard-bx">
      {/* <div className="education-card cardgreybx">
        <div className="row"> */}
      {/* <div className="col-md-6">
            {jobTitle && (
              <div className="infocard-upper cstm-row">
                <span className="label-name titlebx fs-12 secondary-color fw-400">
                  Job Title:
                </span>
                <span className="desc-name titlebx fs-12 secondary-color fw-700">
                  {jobTitle}
                </span>
              </div>
            )}
            {nameofSchool && (
              <div className="infocard-upper cstm-row">
                <span className="label-name titlebx fs-12 secondary-color fw-400">
                  Name of School:
                </span>
                <span className="desc-name titlebx fs-12 secondary-color fw-700">
                  {nameofSchool}
                </span>
              </div>
            )}
            {startDate && (
              <div className="infocard-upper cstm-row">
                <span className="label-name titlebx fs-12 secondary-color fw-400">
                  Start Date:
                </span>
                <span className="desc-name titlebx fs-12 secondary-color fw-700">
                  {startDate}
                </span>
              </div>
            )}
            {finishDate && (
              <div className="infocard-upper cstm-row">
                <span className="label-name titlebx fs-12 secondary-color fw-400">
                  Finish Date:
                </span>
                <span className="desc-name titlebx fs-12 secondary-color fw-700">
                  {finishDate}
                </span>
              </div>
            )}
          </div>
          <div className="col-md-6">
            {jobType && (
              <div className="infocard-upper cstm-row">
                <span className="label-name titlebx fs-12 secondary-color fw-400">
                  Job Type:
                </span>
                <span className="desc-name titlebx fs-12 secondary-color fw-700">
                  {jobType}
                </span>
              </div>
            )}
            {curriculum && (
              <div className="infocard-upper cstm-row">
                <span className="label-name titlebx fs-12 secondary-color fw-400">
                  Curriculum:
                </span>
                <span className="desc-name titlebx fs-12 secondary-color fw-700">
                  {curriculum}
                </span>
              </div>
            )}
            {city && (
              <div className="infocard-upper cstm-row">
                <span className="label-name titlebx fs-12 secondary-color fw-400">
                  City:{" "}
                </span>
                <span className="desc-name titlebx fs-12 secondary-color fw-700">
                  {city}
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
      {/* </div>
      </div> */}
      <div className="cardgreybx">
        <div className="row">
          {arr.map((a, i) => (
            <div className={`col-md-6  sec-${i}`} key={i}>
              {Object.entries(a).map(([key, value], index) => (
                <div className="infocard-upper cstm-row" key={index}>
                  <span className="label-name titlebx fs-12 secondary-color fw-400">
                    {key}
                  </span>
                  <span className="desc-name titlebx fs-12 secondary-color fw-700">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {additional && (
        <div className="card-footerbx">
          <div className="card-footer-iiner">
            <h4 className="desc-name titlebx fs-12 secondary-color fw-700">
              Additional Responsibilities:
            </h4>
            <p className="label-name titlebx fs-12 secondary-color fw-400">
              {additional}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
