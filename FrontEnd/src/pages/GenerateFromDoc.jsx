import React, { useState } from "react";
import { httpClient } from "../constants/httpClient";
import { PDF } from "../constants/appConstant";
import { generatePdfFromBuffer } from "../helpers/convertBuffertoPdf";
import { successToast, errorToast } from "../helpers/toaster";
import DownloadImage from "../assets/images/download.png";
import UploadImage from "../assets/images/upload.png";

//loader
import Loader from "../components/loader";

function GeneratePdfFromDoc() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFiles = (e) => {
    setFiles(e.target.files);
  };

  const download = async () => {
    try {
      if (files.length) {
        setLoading(true);
        const formData = new FormData();
        for (let file of files) {
          formData.append("file", file);
        }
        const result = await httpClient.post(PDF.GENERATE_FROM_DOC, formData);
        generatePdfFromBuffer(result.data.data.data);
        successToast("Downloaded successfully");
      } else errorToast("Please select a file");
    } catch (err) {
      errorToast(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <Loader />}
      <div className="pdf-uploadbx">
        <div className="btn-listpdf">
          <h3>Upload Word File</h3>
          <div className="btnbox1 box1">
            <div className="uplod-btnbx">
              <input
                id="pdf-upload"
                type="file"
                onChange={handleFiles}
                accept=".docx"
              />
              <label className="pdf-upload" htmlFor="pdf-upload">
                <img src={UploadImage} alt="" /> Upload
              </label>
            </div>
          </div>
          <div className="btnbox2 box1">
            <button onClick={download} className="btn-download">
              {" "}
              <img src={DownloadImage} alt="" /> Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GeneratePdfFromDoc;
