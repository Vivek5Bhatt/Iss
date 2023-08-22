import React from "react";

function WithinClass({ data }) {
  const { description, comments } = data;
  return (
    <>
      <div className="cardbx-main pb-15">
        <div className="table-cardbox">
          <div className="table-title secondary-bgcolor">
            <h3 className="titlebx fs-14 white-color fw-600 secondary-font">
              Within the Classroom
            </h3>
          </div>
          <div className="cardbody-bxx">
            {description && (
              <div className="innercard-detail refernce-outerbx innercard-detail-bx">
                <div className="titlebx fs-12 fw-700 grey-color boder-bottom-grey boder-dark">
                  COMMENTS
                </div>
                <p className="subtitle fs-12 fw-400 secondary-color">
                  {description}
                </p>
              </div>
            )}
            {comments?.length && (
              <div className="learning-tablebx">
                <table className="table cstm-tablebx table-borderbx">
                  <tbody>
                    {comments.map((com, i) => (
                      <tr key={i}>
                        <td className="w-70">{com.comment}</td>
                        <td>
                          <div className="progressbar">
                            <span
                              className={`progress-linebar purple-bgcolor w-${com.number}`}
                            ></span>
                          </div>
                        </td>
                        <td className="value-td">{com.number}</td>
                      </tr>
                    ))}
                    {/* <tr>
                    <td className="w-70">
                      Establishes a positive and productive learning environment
                      for students:
                    </td>
                    <td>
                      <div className="progressbar">
                        <span className="progress-linebar purple-bgcolor w-10"></span>
                      </div>
                    </td>
                    <td className="value-td">10</td>
                  </tr>
                  <tr>
                    <td className="w-70">
                      Implements creative and stimulating lessons/activities
                      that engage and challenge students:
                    </td>
                    <td>
                      <div className="progressbar">
                        <span className="progress-linebar blue-bgcolor w-9"></span>
                      </div>
                    </td>
                    <td className="value-td">9</td>
                  </tr>
                  <tr>
                    <td className="w-70">
                      Shows knowledge of the students' skills/proficiency:
                    </td>
                    <td>
                      <div className="progressbar">
                        <span className="progress-linebar blue-bgcolor w-9"></span>
                      </div>
                    </td>
                    <td className="value-td">9</td>
                  </tr>
                  <tr>
                    <td className="w-70">
                      Communicate with students clearly:{" "}
                    </td>
                    <td>
                      <div className="progressbar">
                        <span className="progress-linebar purple-bgcolor w-10"></span>
                      </div>
                    </td>
                    <td className="value-td">10</td>
                  </tr>
                  <tr>
                    <td className="w-70">
                      Manages student behavior effectively:
                    </td>
                    <td>
                      <div className="progressbar">
                        <span className="progress-linebar purple-bgcolor w-10"></span>
                      </div>
                    </td>
                    <td className="value-td">10</td>
                  </tr>
                  <tr>
                    <td className="w-70">Works with colleagues effectively:</td>
                    <td>
                      <div className="progressbar">
                        <span className="progress-linebar purple-bgcolor w-10"></span>
                      </div>
                    </td>
                    <td className="value-td">10</td>
                  </tr>

                  <tr>
                    <td className="w-70">
                      Demonstrates appropriate time management and
                      organizational skills:{" "}
                    </td>
                    <td>
                      <div className="progressbar">
                        <span className="progress-linebar blue-bgcolor w-9"></span>
                      </div>
                    </td>
                    <td className="value-td">9</td>
                  </tr>

                  <tr>
                    <td className="w-70">
                      Demonstrates respect for all students:{" "}
                    </td>
                    <td>
                      <div className="progressbar">
                        <span className="progress-linebar purple-bgcolor w-10"></span>
                      </div>
                    </td>
                    <td className="value-td">10</td>
                  </tr> */}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default WithinClass;
