import React from "react";
// import Logo from "../../../assets/images/logo.png";
import { Logo } from "../../../constants/base64Image";

function Header({ headerData }) {
  const { name } = headerData;
  return (
    <>
      <div className="header-box header-box-fixed">
        <div className="row align-items-center">
          <div className="col box1">
            <div className="title-box">
              <h3 className="titlebx secondary-color fw-700 fs-20 secondary-font">
                Reference By {name}
              </h3>
            </div>
          </div>
          <div className="col box2">
            <div className="logoright">
              <img src={Logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
