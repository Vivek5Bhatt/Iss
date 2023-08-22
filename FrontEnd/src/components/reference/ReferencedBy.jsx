import React from "react";
import BeyondClass from "./referencedBy/BeyondClass";
import Contributions from "./referencedBy/Contributions";
import CultureClimate from "./referencedBy/CultureClimate";
import General from "./referencedBy/General";
import Header from "./referencedBy/Header";
import InstructionalLeadership from "./referencedBy/InstructionalLeadership";
import Leadership from "./referencedBy/Leadership";
import PersonalLeadership from "./referencedBy/PersonalLeadership";
import Professionalism from "./referencedBy/Professionalism";
import RefInfo from "./referencedBy/RefInfo";
import SchoolManagement from "./referencedBy/SchoolManagement";
import TalentManagement from "./referencedBy/TalentManagement";
import Teaching from "./referencedBy/Teaching";
import WithinClass from "./referencedBy/WithinClass";
import WithinProfessionalCommunity from "./referencedBy/WithinProfessionalCommunity";


function ReferencedBy({ refData }) {
  const {
    refInfo,
    withInClass,
    teachings,
    beyondClass,
    professional,
    general,
    headerData,
  } = refData;

  return (
    <>
      <div className="wrapper referenceby">
        <div className="header-main ">
          <div className="cstm-container">
            <div className="bg-gradient"></div>
            <Header headerData={headerData} />

            <div className="innerbody-page">
              {refInfo && <RefInfo refInfo={refInfo} />}

              {withInClass && <InstructionalLeadership data={withInClass} />}
              {withInClass && <TalentManagement data={withInClass} />}

              {withInClass && <SchoolManagement data={withInClass} />}

              {withInClass && <CultureClimate data={withInClass} />}

              {withInClass && <PersonalLeadership data={withInClass} />}
              {withInClass && <Contributions data={withInClass} />}
              {withInClass && <Professionalism data={withInClass} />}
              {withInClass && <Leadership data={withInClass} />}


              {withInClass && <WithinClass data={withInClass} />}

              {teachings && <Teaching data={teachings} />}

              {beyondClass && <BeyondClass data={beyondClass} />}

              {professional && (
                <WithinProfessionalCommunity data={professional} />
              )}

              {general && <General data={general} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReferencedBy;
