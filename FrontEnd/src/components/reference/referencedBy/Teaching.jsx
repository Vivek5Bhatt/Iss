import React from "react";

function Teaching({ data }) {
  const { description, comments } = data;
  return (
    <div className="cardbx-main pt-15">
      {/* <div className="innercardbx-body"> */}
      <div className="table-cardbox">
        <div className="table-title secondary-bgcolor">
          <h3 className="titlebx fs-14 white-color fw-600 secondary-font">
            Teaching and Learning
          </h3>
        </div>
        <div className="cardbody-bxx">
          {description && (
            <div className="innercard-detail refernce-outerbx">
              <div className="innercard-detail-bx">
                <div className="titlebx fs-12 fw-700 grey-color boder-bottom-grey boder-dark">
                  TEACHING AND LEARNING COMMENT
                </div>
                <p className="subtitle fs-12 fw-400 secondary-color">
                  {description}
                </p>
              </div>
            </div>
          )}

          {/* <div className="learning-table"> */}
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
                            className={`progress-linebar dark-green-bgcolor w-${com.number}`}
                          ></span>
                        </div>
                      </td>
                      <td className="value-td">{com.number}</td>
                    </tr>
                  ))}
                  {/* <tr>
                      <td className="w-70">
                        Differentiates instruction to meet student needs:{" "}
                      </td>
                      <td>
                        <div className="progressbar">
                          <span className="progress-linebar dark-green-bgcolor w-4"></span>
                        </div>
                      </td>
                      <td className="value-td">4</td>
                    </tr>
                    <tr>
                      <td className="w-70">
                        Uses a variety of effective instructional strategies and
                        resources:{" "}
                      </td>
                      <td>
                        <div className="progressbar">
                          <span className="progress-linebar see-green-bgcolor w-6"></span>
                        </div>
                      </td>
                      <td className="value-td">6</td>
                    </tr>
                    <tr>
                      <td className="w-70">
                        Knows the content, how to select it, and teach it:
                      </td>
                      <td>
                        <div className="progressbar">
                          <span className="progress-linebar see-green-bgcolor w-6"></span>
                        </div>
                      </td>
                      <td className="value-td">6</td>
                    </tr>
                    <tr>
                      <td className="w-70">Provides feedback to students:</td>
                      <td>
                        <div className="progressbar">
                          <span className="progress-linebar dark-green-bgcolor w-4"></span>
                        </div>
                      </td>
                      <td className="value-td">4</td>
                    </tr>
                    <tr>
                      <td className="w-70">
                        Makes consistent and comparable judgments:
                      </td>
                      <td>
                        <div className="progressbar">
                          <span className="progress-linebar see-green-bgcolor w-6"></span>
                        </div>
                      </td>
                      <td className="value-td">6</td>
                    </tr>
                    <tr>
                      <td className="w-70">Interprets student data: </td>
                      <td>
                        <div className="progressbar">
                          <span className="progress-linebar dark-green-bgcolor w-4"></span>
                        </div>
                      </td>
                      <td className="value-td">4</td>
                    </tr>

                    <tr>
                      <td className="w-70">Reports on student achievement:</td>
                      <td>
                        <div className="progressbar">
                          <span className="progress-linebar dark-green-bgcolor w-4"></span>
                        </div>
                      </td>
                      <td className="value-td">4</td>
                    </tr>

                    <tr>
                      <td className="w-70">
                        Manages student behavior effectively:{" "}
                      </td>
                      <td>
                        <div className="progressbar">
                          <span className="progress-linebar dark-green-bgcolor w-4"></span>
                        </div>
                      </td>
                      <td className="value-td">4</td>
                    </tr>

                    <tr>
                      <td className="w-70">
                        Uses effective classroom communication:
                      </td>
                      <td>
                        <div className="progressbar">
                          <span className="progress-linebar see-green-bgcolor w-6"></span>
                        </div>
                      </td>
                      <td className="value-td">6</td>
                    </tr>

                    <tr>
                      <td className="w-70">
                        Uses a variety of methods to assess student learning:
                      </td>
                      <td>
                        <div className="progressbar">
                          <span className="progress-linebar dark-green-bgcolor w-4"></span>
                        </div>
                      </td>
                      <td className="value-td">4</td>
                    </tr>

                    <tr>
                      <td className="w-70">Embraces student diversity:</td>
                      <td>
                        <div className="progressbar">
                          <span className="progress-linebar blue-bgcolor w-8"></span>
                        </div>
                      </td>
                      <td className="value-td">8</td>
                    </tr>

                    <tr>
                      <td className="w-70">
                        Provides a respectful, positive, safe, and collaborative
                        learning environment:
                      </td>
                      <td>
                        <div className="progressbar">
                          <span className="progress-linebar see-green-bgcolor w-6"></span>
                        </div>
                      </td>
                      <td className="value-td">6</td>
                    </tr>
                    <tr>
                      <td className="w-70">
                        Integrates technology to improve teaching and learning:
                      </td>
                      <td>
                        <div className="progressbar">
                          <span className="progress-linebar dark-green-bgcolor w-4"></span>
                        </div>
                      </td>
                      <td className="value-td">4</td>
                    </tr> */}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default Teaching;
