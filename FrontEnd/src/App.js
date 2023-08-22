import React, { useEffect, useState } from "react";

//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//toaster
import { ToastContainer } from "react-toastify";
//css
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

//main component
import Main from "./pages";

//constant
import { httpClient } from "./constants/httpClient";
import { USER } from "./constants/appConstant";
import MergePdf from "./pages/MergePdf";
import GenerateFromDoc from "./pages/GenerateFromDoc";

import Loader from "./components/loader";

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  // to get user data
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const res = await httpClient.get(USER.DETAIL);
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={data && <Main userData={data} />} />
          <Route
            path="full-dossier"
            element={data && <Main userData={data} />}
          />
          <Route path="merge-pdf" element={<MergePdf />} />
          <Route path="generate-from-doc" element={<GenerateFromDoc />} />
        </Routes>
      </Router>
      {!loading && !data && (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <h3>Something went wrong</h3>
        </div>
      )}
      {loading && <Loader />}

      <ToastContainer position="bottom-center" theme="colored" />
    </>
  );
}

export default App;
