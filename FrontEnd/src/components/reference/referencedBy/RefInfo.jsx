import React from "react";
import { SplitObject } from "../../../helpers/splitObject";

function RefInfo({ refInfo }) {
  // const {
  //   refereeTitle,
  //   refereeRole,
  //   schoolName,
  //   workPeriod,
  //   refereeEmail,
  //   refereePhone,
  //   candidateName,
  //   dateofReference,
  // } = refInfo;
  const { refreeInfo, candidateInfo, comments } = refInfo;
  const refreeArr = SplitObject(refreeInfo);
  const candidateArr = SplitObject(candidateInfo);
  return (
    <>
      <div className="cardbx-main">
        <div className="innercardbx-body">
          <div className="table-cardbox">
            <div className="table-title secondary-bgcolor">
              <h3 className="titlebx fs-14 white-color fw-600 secondary-font">
                Reference Information & Questions
              </h3>
            </div>
            <div className="cardbody-bxx">
              <div className="info-bx">
                <div className="row gap-15">
                  {refreeArr.map((ref, i) => (
                    <div className="col-md-6" key={i}>
                      {Object.entries(ref).map(([key, value], index) => (
                        <div className="infocard-upper cstm-row" key={index}>
                          <span className="label-name titlebx fs-12 secondary-color fw-400">
                            {key}:
                          </span>
                          <span className="desc-name titlebx fs-12 secondary-color fw-700">
                            {value}
                          </span>
                        </div>
                      ))}
                      {/* {refereeRole && (
                      <div className="infocard-upper cstm-row">
                        <span className="label-name titlebx fs-12 secondary-color fw-400">
                          Referee Role:
                        </span>
                        <span className="desc-name titlebx fs-12 secondary-color fw-700">
                          {refereeRole}
                        </span>
                      </div>
                    )}
                    {schoolName && (
                      <div className="infocard-upper cstm-row">
                        <span className="label-name titlebx fs-12 secondary-color fw-400">
                          School Name:
                        </span>
                        <span className="desc-name titlebx fs-12 secondary-color fw-700">
                          {schoolName}
                        </span>
                      </div>
                    )} */}
                    </div>
                  ))}
                  {/* <div className="col-md-6 right-bx">
                    {workPeriod && (
                      <div className="infocard-upper cstm-row">
                        <span className="label-name titlebx fs-12 secondary-color fw-400">
                          Work Period:
                        </span>
                        <span className="desc-name titlebx fs-12 secondary-color fw-700">
                          {workPeriod}
                        </span>
                      </div>
                    )}
                    {refereeEmail && (
                      <div className="infocard-upper cstm-row">
                        <span className="label-name titlebx fs-12 secondary-color fw-400">
                          Referee Email:
                        </span>
                        <span className="desc-name titlebx fs-12 secondary-color fw-700">
                          {refereeEmail}
                        </span>
                      </div>
                    )}
                    {refereePhone && (
                      <div className="infocard-upper cstm-row">
                        <span className="label-name titlebx fs-12 secondary-color fw-400">
                          Referee Phone:
                        </span>
                        <span className="desc-name titlebx fs-12 secondary-color fw-700">
                          {refInfo.refereePhone}
                        </span>
                      </div>
                    )}
                  </div> */}
                </div>
              </div>
              <hr className="boder-bottom-grey cstm-hr boder-dark"></hr>
              <div className="refernce-infobx">
                <div className="row">
                  {candidateArr.map((ref, i) => (
                    <div className="col-md-6" key={i}>
                      {Object.entries(ref).map(([key, value], index) => (
                        <div className="infocard-upper cstm-row" key={index}>
                          <span className="label-name titlebx fs-12 secondary-color fw-400">
                            {key}:
                          </span>
                          <span className="desc-name titlebx fs-12 secondary-color fw-700">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                  {/* <div className="col-md-6 right-bx">
                     {dateofReference && (
                       <div className="infocard-upper cstm-row">
                       <span className="label-name titlebx fs-12 secondary-color fw-400">
                         Date of Reference:
                        </span>
                        <span className="desc-name titlebx fs-12 secondary-color fw-700">
                          {dateofReference}
                        </span>
                      </div>
                     )}
                  </div> */}
                </div>
              </div>
              {comments.map((com, i) => (
                <div
                  className="innercard-detail refernce-outerbx pt-10"
                  key={i}
                >
                  <div className="innercard-detail-bx">
                    <div className="titlebx fs-12 fw-700 grey-color boder-bottom-grey">
                      {com.comment}
                    </div>
                    <p className="subtitle fs-12 fw-400 secondary-color">
                      {com.ans}
                    </p>
                  </div>
                </div>
              ))}
              {/* <div className="innercard-detail refernce-outerbx pt-10">
                <div className="innercard-detail-bx">
                  <div className="titlebx fs-12 fw-700 grey-color boder-bottom-grey">
                    TO YOUR KNOWLEDGE, HAS THE CANDIDATE EVER BEEN
                    REPORTED/INVESTIGATED FOR ISSUE RELATING TO CHILD
                    PROTECTION?
                  </div>
                  <p className="subtitle fs-12 fw-400 secondary-color">Yes</p>
                </div>
              </div>
              <div className="innercard-detail refernce-outerbx pt-10">
                <div className="innercard-detail-bx">
                  <div className="titlebx fs-12 fw-700 grey-color boder-bottom-grey">
                    GENERAL COMMENT ABOUT THE CANDIDATE
                  </div>
                  <p className="subtitle fs-12 fw-400 secondary-color">
                    Rob is an exemplary leader. I would have no hesitation
                    hiring him again.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="footer-totalcount pb-15">
          <div className="countbox table-cardbox">
            <ul className="count-listing">
              <li>
                <div className="count-inner">
                  <span className="count-num">1-3 = </span>
                  <span className="count-name light-green-color">Average </span>
                  <span className="count-num">( &gt;50% )</span>
                </div>
              </li>
              <li>
                <div className="count-inner">
                  <span className="count-num">4-5 = </span>
                  <span className="count-name dark-green-color">Good </span>
                  <span className="count-num">( Top 50% )</span>
                </div>
              </li>
              <li>
                <div className="count-inner">
                  <span className="count-num">6-7 = </span>
                  <span className="count-name see-green-color">Very Good </span>
                  <span className="count-num">( Top 25% )</span>
                </div>
              </li>
              <li>
                <div className="count-inner">
                  <span className="count-num">8-9 = </span>
                  <span className="count-name blue-color">Excellent</span>
                  <span className="count-num">( Top 10% )</span>
                </div>
              </li>
              <li>
                <div className="count-inner">
                  <span className="count-num">10 = </span>
                  <span className="count-name purple-color">Outstanding</span>
                  <span className="count-num">( Top 2% )</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default RefInfo;
