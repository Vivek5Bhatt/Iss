import React from "react";

function BeyondClass({ data }) {
  const { description, comments } = data;
  return (
    <>
      <div className="cardbx-main pt-15">
        <div className="table-cardbox">
          <div className="table-title secondary-bgcolor">
            <h3 className="titlebx fs-14 white-color fw-600 secondary-font">
              Beyond the Classroom
            </h3>
          </div>
          <div className="cardbody-bxx">
            {description && (
              <div className="innercard-detail refernce-outerbx">
                <div className="innercard-detail-bx">
                  <div className="titlebx fs-12 fw-700 grey-color boder-bottom-grey boder-dark">
                    COMMENTS
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
                              className={`progress-linebar purple-bgcolor w-${com.number}`}
                            ></span>
                          </div>
                        </td>
                        <td className="value-td">{com.number}</td>
                      </tr>
                    ))}

                    {/* <tr>
                        <td className="w-70">Adapts to new situations:</td>
                        <td>
                          <div className="progressbar">
                            <span className="progress-linebar purple-bgcolor w-10"></span>
                          </div>
                        </td>
                        <td className="value-td">10</td>
                      </tr>
                      <tr>
                        <td className="w-70">
                          Communicates effectively with parents/support
                          staff/administrators:
                        </td>
                        <td>
                          <div className="progressbar">
                            <span className="progress-linebar blue-bgcolor w-9"></span>
                          </div>
                        </td>
                        <td className="value-td">9</td>
                      </tr>

                      <tr>
                        <td className="w-70">Shows flexibility:</td>
                        <td>
                          <div className="progressbar">
                            <span className="progress-linebar purple-bgcolor w-10"></span>
                          </div>
                        </td>
                        <td className="value-td">10</td>
                      </tr>
                      <tr>
                        <td className="w-70">Is responsible and reliable: </td>
                        <td>
                          <div className="progressbar">
                            <span className="progress-linebar purple-bgcolor w-10"></span>
                          </div>
                        </td>
                        <td className="value-td">10</td>
                      </tr>
                      <tr>
                        <td className="w-70">Has a good sense of humor: </td>
                        <td>
                          <div className="progressbar">
                            <span className="progress-linebar purple-bgcolor w-10"></span>
                          </div>
                        </td>
                        <td className="value-td">10</td>
                      </tr> */}
                  </tbody>
                </table>
                {/* </div> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BeyondClass;
