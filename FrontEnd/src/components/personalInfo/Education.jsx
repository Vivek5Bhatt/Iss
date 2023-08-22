import React from "react";
import { SplitObject } from "../../helpers/splitObject";

function Education({ educat }) {
  const { education } = educat;
  return (
    <>
      <div className="education-card">
        <div className="table-cardbox">
          <div className="table-title primary-bgcolor">
            <h3 className="titlebx fs-14 white-color fw-600 secondary-font">
              Education
            </h3>
          </div>
          <div className="cardbody-bxx">
            {education.map((edu, i) => (
              <EducationCard data={edu} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;

const EducationCard = ({ data }) => {
  // const {
  //   nameofInstitute,
  //   country,
  //   degreeType,
  //   course,
  //   degreeConferred,
  //   start,
  //   end,
  // } = data;

  const arr = SplitObject(data)

  return (
    <div className="edu-innercard-bx">
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
          {/*<div className="col-md-6">
            
             {nameofInstitute && (
              <div className="infocard-upper cstm-row">
                <span className="label-name titlebx fs-12 secondary-color fw-400">
                  Name of Institute:
                </span>
                <span className="desc-name titlebx fs-12 secondary-color fw-700">
                  {nameofInstitute}
                </span>
              </div>
            )}
            {country && (
              <div className="infocard-upper cstm-row">
                <span className="label-name titlebx fs-12 secondary-color fw-400">
                  Country:{" "}
                </span>
                <span className="desc-name titlebx fs-12 secondary-color fw-700">
                  {country}
                </span>
              </div>
            )}
            {degreeType && (
              <div className="infocard-upper cstm-row">
                <span className="label-name titlebx fs-12 secondary-color fw-400">
                  Degree Type:{" "}
                </span>
                <span className="desc-name titlebx fs-12 secondary-color fw-700">
                  {degreeType}
                </span>
              </div>
            )}
            {course && (
              <div className="infocard-upper cstm-row">
                <span className="label-name titlebx fs-12 secondary-color fw-400">
                  Course / Major:{" "}
                </span>
                <span className="desc-name titlebx fs-12 secondary-color fw-700">
                  {course}
                </span>
              </div>
            )} 
          </div>*/}
          {/* <div className="col-md-6">
            {degreeConferred && (
              <div className="infocard-upper cstm-row">
                <span className="label-name titlebx fs-12 secondary-color fw-400">
                  Degree Conferred:
                </span>
                <span className="desc-name titlebx fs-12 secondary-color fw-700">
                  {degreeConferred}
                </span>
              </div>
            )}
            {start && end && (
              <div className="infocard-upper cstm-row">
                <span className="label-name titlebx fs-12 secondary-color fw-400">
                  Start & End Date:{" "}
                </span>
                <span className="desc-name titlebx fs-12 secondary-color fw-700">
                  <span>{start}</span>
                  <br />
                  <span>{end}</span>
                </span>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};
