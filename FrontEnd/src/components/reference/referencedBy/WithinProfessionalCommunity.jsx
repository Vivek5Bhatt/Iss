import React from "react";

function WithinProfessionalCommunity({ data }) {
  const { comments } = data;
  return (
    <>
      <div className="cardbx-main  pt-15">
        {/* <div className="innercardbx-body"> */}
        <div className="table-cardbox">
          <div className="table-title secondary-bgcolor">
            <h3 className="titlebx fs-14 white-color fw-600 secondary-font">
              Within the Professional Community
            </h3>
          </div>
          <div className="cardbody-bxx">
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
                              className={`progress-linebar blue-bgcolor w-${com.number}`}
                            ></span>
                          </div>
                        </td>
                        <td className="value-td">{com.number}</td>
                      </tr>
                    ))}
                    {/* <tr>
                                                <td className="w-70">Communicates effectively with administration: </td>
                                                <td>
                                                    <div className="progressbar">
                                                        <span className="progress-linebar purple-bgcolor w-10"></span>
                                                    </div>
                                                </td>
                                                <td className="value-td">10</td>
                                            </tr>
                                            <tr>
                                                <td className="w-70">Contributes to a collaborative and supportive working environment: </td>
                                                <td>
                                                    <div className="progressbar">
                                                        <span className="progress-linebar purple-bgcolor w-10"></span>
                                                    </div>
                                                </td>
                                                <td className="value-td">10</td>
                                            </tr>

                                            <tr>
                                                <td className="w-70">Supports school wide initiatives directly and indirectly: </td>
                                                <td>
                                                    <div className="progressbar">
                                                        <span className="progress-linebar purple-bgcolor w-10"></span>
                                                    </div>
                                                </td>
                                                <td className="value-td">10</td>
                                            </tr>
                                            <tr>
                                                <td className="w-70">Contributes to positive staff morale:</td>
                                                <td>
                                                    <div className="progressbar">
                                                        <span className="progress-linebar purple-bgcolor w-10"></span>
                                                    </div>
                                                </td>
                                                <td className="value-td">10</td>
                                            </tr>
                                            <tr>
                                                <td className="w-70">Meets deadlines:</td>
                                                <td>
                                                    <div className="progressbar">
                                                        <span className="progress-linebar blue-bgcolor w-9"></span>
                                                    </div>
                                                </td>
                                                <td className="value-td">9</td>
                                            </tr>
                                            <tr>
                                                <td className="w-70">Continues professional development:</td>
                                                <td>
                                                    <div className="progressbar">
                                                        <span className="progress-linebar blue-bgcolor w-9"></span>
                                                    </div>
                                                </td>
                                                <td className="value-td">9</td>
                                            </tr>

                                            <tr>
                                                <td className="w-70">Demonstrates leadership characteristics:</td>
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
    </>
  );
}

export default WithinProfessionalCommunity;
