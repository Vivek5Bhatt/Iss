import React, { useEffect, useState, memo } from "react";
import { PdfContext } from "../context/PdfContextApi";
import { useLocation } from "react-router-dom";

//pdf css
import { dossierPdfCss } from "../constants/dossier-pdf-css";

//components
import PersonalInfo from "./PersonalInfo";
import Reference from "./Reference";
import ReferencedBy from "../components/reference/ReferencedBy";

//app constant
import { httpClient } from "../constants/httpClient";
import { PDF } from "../constants/appConstant";

//common functions
import { GeneratePdf } from "../helpers/generatePdf";
import { generatePdfFromBuffer } from "../helpers/convertBuffertoPdf";
import { successToast, errorToast } from "../helpers/toaster";

//images
import DownloadImage from "../assets/images/download.png";
import UploadImage from "../assets/images/upload.png";

//loader
import Loader from "../components/loader";

// import SampleData from "../data/sampleDataNew.json";

function Main({ userData }) {
  const location = useLocation();

  const isFull = location.pathname === "/full-dossier" ? true : false;

  const [pdfHtml, setPdfHtml] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [files, setFiles] = useState([]);

  useEffect(() => {
    generatePdf();
  }, []);

  const generatePdf = () => {
    setLoading(true);
    setTimeout(() => {
      const html = GeneratePdf();
      setPdfHtml(html);
      setLoading(false);
    }, 100);
  };

  const DownloadPdf = async () => {
    try {
      setIsLoading(true);
      const html = `
        <html>
          <head>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">    
            <body>
           ${pdfHtml}
          </body>
        </html>
        `;

      const formData = new FormData();
      formData.append("html", html);
      formData.append("css", dossierPdfCss);
      for (let file of files) {
        formData.append("file", file);
      }

      const result = await httpClient.post(PDF.GENERATE, formData);
      generatePdfFromBuffer(result.data.data.data);
      successToast("Downloaded successfully");
    } catch (err) {
      errorToast(err?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFiles = (e) => {
    setFiles(e.target.files);
  };

  return (
    <>
      <>
        <PdfContext.Provider value={userData}>
          <div
            className={!loading ? "main-wrapper remove" : "main-wrapper hide"}
          >
            {userData.profileInfo && <PersonalInfo />}
            {userData.reference && <Reference />}
            {isFull &&
              userData?.referenceBy?.length &&
              userData?.referenceBy.map((ref, i) => (
                <ReferencedBy refData={ref} key={i} />
              ))}
          </div>
        </PdfContext.Provider>
        <div className={!loading ? "temp remove" : "temp hide"}></div>
      </>
      {pdfHtml && !loading && (
        <div dangerouslySetInnerHTML={{ __html: pdfHtml }} />
      )}
      <div className="fileupload">
        <input
          id="fileup"
          type="file"
          multiple
          onChange={handleFiles}
          accept=".docx"
        />
        <label htmlFor="fileup" className="fileupload-btn">
          <img src={UploadImage} alt="" />
        </label>
      </div>

      <button className="download-btn" onClick={DownloadPdf}>
        <img src={DownloadImage} alt="" />{" "}
      </button>
      {isLoading && <Loader />}
    </>
  );
}

export default memo(Main);

// className={pdfHtml ? "main-wrapper remove" : "main-wrapper hide"}
