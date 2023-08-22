const pdfService = require("../services/pdfGenerator.services");
const saleforceService = require("../services/salesforce.services");
const pdfData = require("../data/sampleData.json");

const generatePdfFromHTML = async (req, res, next) => {
  try {
    const { html, css } = req.body;
    const data = await pdfService.generatePdfFromHTML(html, css, req.files);
    // req.body["VersionData"] = data;
    // const response = await saleforceService.uploadFileToSalesForce(req.body);
    // const pdf = await saleforceService.getFileFromSalesForce(
    //   response.id,
    //   req.body
    // );
    res.send({ message: "ok", data });
  } catch (err) {
    return next(err);
  }
};

const getUserData = (req, res) => {
  res.send({
    data: pdfData,
  });
};

const gernatePdfFromDoc = async (req, res, next) => {
  try {
    const data = await pdfService.gernatePdfFromDoc(req.files);
    res.send({ message: "success", data });
  } catch (err) {
    return next(err);
  }
};

const mergePdf = async (req, res, next) => {
  try {
    const data = await pdfService.mergePdf(req.files);
    // req.body["VersionData"] = data;
    // const response = await saleforceService.uploadFileToSalesForce(req.body);
    // const pdf = await saleforceService.getFileFromSalesForce(
    //   response.id,
    //   req.body
    // );
    res.send({ message: "ok", data });
  } catch (err) {
    return next(err);
  }
};

const fullDossier = async (req, res, next) => {
  try {
    const data = await pdfService.fullDossier(req.body);
    req.body["VersionData"] = data;
    const getToken = await saleforceService.generateAccessToken()
    req.body["instance_url"] = getToken.instance_url;
    req.body["access_token"] = getToken.access_token;
    req.body["type"] = "full"
    await saleforceService.uploadFile(req.body);
    res.send({ message: "File Upload Successfully!", data });
  } catch (err) {
    res.status(err.response.status).json({ message: err.response.data[0].message })
  }
};

const expressDossier = async (req, res, next) => {
  try {
    const data = await pdfService.expressDossier(req.body);
    req.body["VersionData"] = data;
    const getToken = await saleforceService.generateAccessToken()
    req.body["instance_url"] = getToken.instance_url;
    req.body["access_token"] = getToken.access_token;
    req.body["type"] = "express"
    await saleforceService.uploadFile(req.body);
    res.send({ message: "File Upload Successfully!", data });
  } catch (err) {
    res.status(err.response.status).json({ message: err.response.data[0].message })
  }
};

const reference = async (req, res, next) => {
  try {
    const data = await pdfService.reference(req.body);
    req.body["VersionData"] = data;
    const getToken = await saleforceService.generateAccessToken()
    req.body["instance_url"] = getToken.instance_url;
    req.body["access_token"] = getToken.access_token;
    req.body["type"] = "reference"
    await saleforceService.uploadFile(req.body);
    res.send({ message: "File Upload Successfully!", data });
  } catch (err) {
    res.status(err.response.status).json({ message: err.response.data[0].message })
  }
};

const testFunction = (req, res) => {
  res.send({ message: "working fine" });
};

module.exports = {
  generatePdfFromHTML,
  gernatePdfFromDoc,
  getUserData,
  mergePdf,
  fullDossier,
  expressDossier,
  testFunction,
  reference
};
