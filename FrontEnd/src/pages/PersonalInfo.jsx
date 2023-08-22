import React, { useContext } from "react";
import BasicInfo from "../components/personalInfo/BasicInfo";
import Carrier from "../components/personalInfo/Carrier";
import Certification from "../components/personalInfo/Certification";
import Education from "../components/personalInfo/Education";
import PositionSought from "../components/personalInfo/PositionSought";
import Header from "../components/personalInfo/Header";

//--
import { PdfContext } from "../context/PdfContextApi";

function PersonalInformation() {
  const {
    profileInfo: { headerData, positionData, basicInfo, education, carrier, certification },
  } = useContext(PdfContext);

  return (
    <>
      <div className="wrapper personal-info">
        <div className="header-main ">
          <div className="cstm-container">
            <div className="bg-gradient"></div>

            <Header data={headerData} />
            <div className="innerbody-page">
              {positionData && <PositionSought positionData={positionData} />}
              {basicInfo && <BasicInfo basicInfo={basicInfo} />}
              {education?.education.length && <Education educat={education} />}
              {certification && <Certification certification={certification} />}
              {carrier.length && <Carrier carrier={carrier} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInformation;
