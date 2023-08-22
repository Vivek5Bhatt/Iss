import React, { useContext } from "react";
import References from "../components/reference/References";
import Header from "../components/personalInfo/Header";
import { PdfContext } from "../context/PdfContextApi";

function Reference() {
  const {
    reference: { ref },
  } = useContext(PdfContext);

  return (
    <>
      <div className="wrapper reference">
        <div className="header-main ">
          <div className="cstm-container">
            <div className="bg-gradient"></div>
            <Header />
            <div className="innerbody-page reference-cardbx row">
              {ref.map((r, i) => (
                <References data={r} index={i} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reference;
