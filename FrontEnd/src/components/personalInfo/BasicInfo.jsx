import React, { useContext } from "react";
import ContactDetails from "./ContactDetails";
import { PdfContext } from "../../context/PdfContextApi";
import { SplitObject } from "../../helpers/splitObject";

function BasicInfo({ basicInfo }) {
  // const {
  //   name,
  //   date,
  //   country,
  //   residence,
  //   relationship,
  //   gender,
  //   bringing,
  //   passport,
  //   criminal,
  //   citizenship,
  //   language,
  // } = basicInfo;

  const { general, native } = basicInfo;

  const arr = SplitObject(general);

  const {
    profileInfo: { contactDetails },
  } = useContext(PdfContext);

  return (
    <>
      <div className="cardbx-main">
        <div className="row">
          <div className="col-md-8">
            <div className="innercardbx-body h-100">
              <div className="table-cardbox h-100">
                <div className="table-title primary-bgcolor">
                  <h3 className="titlebx fs-14 white-color fw-600 secondary-font">
                    Basic Information
                  </h3>
                </div>
                <div className="cardbody-bxx">
                  <div className="info-bx">
                    <div className="row gap-15">
                      <div className="col-md-8">
                        {Object.entries(arr[0]).map(([key, value], index) => (
                          <div className="infocard-upper cstm-row" key={index}>
                            <span className="label-name titlebx fs-12 secondary-color fw-400">
                              {key}
                            </span>
                            <span className="desc-name titlebx fs-12 secondary-color fw-700">
                              {value}
                            </span>
                          </div>
                        ))}
                        {/* {date && (
                          <div className="infocard-upper cstm-row">
                            <span className="label-name titlebx fs-12 secondary-color fw-400">
                              Date of Birth:
                            </span>
                            <span className="desc-name titlebx fs-12 secondary-color fw-700">
                              {date}
                            </span>
                          </div>
                        )}
                        {country && (
                          <div className="infocard-upper cstm-row">
                            <span className="label-name titlebx fs-12 secondary-color fw-400">
                              Country of Birth:
                            </span>
                            <span className="desc-name titlebx fs-12 secondary-color fw-700">
                              {country}
                            </span>
                          </div>
                        )}
                        {residence && (
                          <div className="infocard-upper cstm-row">
                            <span className="label-name titlebx fs-12 secondary-color fw-400">
                              Country of Residence:
                            </span>
                            <span className="desc-name titlebx fs-12 secondary-color fw-700">
                              {residence}
                            </span>
                          </div>
                        )}
                        {relationship && (
                          <div className="infocard-upper cstm-row">
                            <span className="label-name titlebx fs-12 secondary-color fw-400">
                              Relationship Status:
                            </span>
                            <span className="desc-name titlebx fs-12 secondary-color fw-700">
                              {relationship}
                            </span>
                          </div>
                        )} */}
                      </div>
                      <div className="col-md-4 right-bx">
                        {Object.entries(arr[1]).map(([key, value], index) => (
                          <div className="infocard-upper cstm-row" key={index}>
                            <span className="label-name titlebx fs-12 secondary-color fw-400">
                              {key}
                            </span>
                            <span className="desc-name titlebx fs-12 secondary-color fw-700">
                              {value}
                            </span>
                          </div>
                        ))}
                        {/* {bringing && (
                          <div className="infocard-upper cstm-row">
                            <span className="label-name titlebx fs-12 secondary-color fw-400">
                              Bringing Pets:
                            </span>
                            <span className="desc-name titlebx fs-12 secondary-color fw-700">
                              {bringing}
                            </span>
                          </div>
                        )}
                        {passport && (
                          <div className="infocard-upper cstm-row">
                            <span className="label-name titlebx fs-12 secondary-color fw-400">
                              EU Passport:
                            </span>
                            <span className="desc-name titlebx fs-12 secondary-color fw-700">
                              {passport}
                            </span>
                          </div>
                        )}
                        {criminal && (
                          <div className="infocard-upper cstm-row">
                            <span className="label-name titlebx fs-12 secondary-color fw-400">
                              Criminal Record:
                            </span>
                            <span className="desc-name titlebx fs-12 secondary-color fw-700">
                              {criminal}
                            </span>
                          </div>
                        )} */}
                      </div>
                    </div>
                  </div>
                  {native && (
                    <>
                      <hr className="boder-bottom-grey cstm-hr"></hr>
                      <div className="info-bx">
                        <div className="row">
                          <div className="col-md-6">
                            {Object.entries(native).map(
                              ([key, value], index) => (
                                <div
                                  className="infocard-upper cstm-row"
                                  key={index}
                                >
                                  <span className="label-name titlebx fs-12 secondary-color fw-400">
                                    {key}
                                  </span>
                                  <span className="desc-name titlebx fs-12 secondary-color fw-700">
                                    {value}
                                  </span>
                                </div>
                              )
                            )}
                            {/* {language && (
                          <div className="infocard-upper cstm-row">
                            <span className="label-name titlebx fs-12 secondary-color fw-400">
                              Language Spoken:
                            </span>
                            <span className="desc-name titlebx fs-12 secondary-color fw-700">
                              {language}
                            </span>
                          </div>
                        )} */}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {contactDetails && (
              <ContactDetails contactDetails={contactDetails} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BasicInfo;
