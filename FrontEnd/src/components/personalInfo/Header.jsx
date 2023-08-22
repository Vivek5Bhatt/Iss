import React, { memo, useContext } from "react";

import { Logo } from "../../constants/base64Image";
// import Logo from "../../assets/images/logo.png"
import { PdfContext } from "../../context/PdfContextApi";
// import { getBase64Image } from "../../helpers/ConvertImage";

function Header() {
  // const [image, setImage] = useState('')
  const {
    profileInfo: {
      headerData: { name, email, phone },
    },
  } = useContext(PdfContext);

  // const handleImage = () => {
  //   getBase64Image(Logo, function (base64image) {
  //     setImage(base64image)
  //   });
  // }
  return (
    <>
      <div className="header-box">
        <div className="row">
          <div className="col box1">
            <div className="title-box">
              <h2 className="titlebx secondary-color fw-700 secondary-font fs-27">
                {name}
              </h2>
              <ul className="header-listing">
                <li>
                  <div className="list-main">
                    <span className="label-tex secondary-color fw-400 fs-12">
                      Primary Email:
                    </span>
                    <strong className="detail-tex secondary-color fw-700 fs-12">
                      {email}
                    </strong>
                  </div>
                </li>
                <li>
                  <div className="list-main">
                    <span className="label-tex secondary-color fw-400 fs-12">
                      Primary Phone:{" "}
                    </span>
                    <strong className="detail-tex secondary-color fw-700 fs-12">
                      {phone}
                    </strong>
                  </div>
                </li>
              </ul>
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

export default memo(Header);
