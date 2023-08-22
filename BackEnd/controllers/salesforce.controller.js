const saleforceService = require("../services/salesforce.services");

const generateAccessToken = async (req, res, next) => {
  try {
    const response = await saleforceService.generateAccessToken();
    res.send({ message: "success", response });
  } catch (err) {
    next(err);
  }
};

const getProfile = async (req, res, next) => {
  try {
    const response = await saleforceService.getProfile(req.body);
    res.send({ message: "success", response });
  } catch (err) {
    next(err);
  }
};

const getObjects = async (req, res, next) => {
  try {
    const response = await saleforceService.getObjects(req.body);
    res.send({ message: "success", response });
  } catch (err) {
    next(err);
  }
};

const getAccounts = async (req, res, next) => {
  try {
    const response = await saleforceService.getAccounts(req.body);
    res.send({ message: "success", response });
  } catch (err) {
    next(err);
  }
};

const getAccountDetail = async (req, res, next) => {
  try {
    const response = await saleforceService.getAccountDetail(req.body);
    res.send({ message: "success", response });
  } catch (err) {
    next(err);
  }
};

const updateAccount = async (req, res, next) => {
  try {
    const response = await saleforceService.updateAccount(req.body);
    res.send({ message: "success", response });
  } catch (err) {
    next(err);
  }
};

const getContacts = async (req, res, next) => {
  try {
    const response = await saleforceService.getContacts(req.body);
    res.send({ message: "success", response });
  } catch (err) {
    next(err);
  }
};

const getContactById = async (req, res, next) => {
  try {
    const response = await saleforceService.getContactById(req.body);
    res.send({ message: "success", response });
  } catch (err) {
    next(err);
  }
};

const updateContact = async (req, res, next) => {
  try {
    const response = await saleforceService.updateContact(req.body);
    res.send({ message: "success", response });
  } catch (err) {
    next(err);
  }
};

const uploadFileToSalesForce = async (req, res, next) => {
  try {
    const response = await saleforceService.uploadFileToSalesForce(req.body);
    const pdf = await saleforceService.getFileFromSalesForce(
      response.id,
      req.body
    );
    res.send({ message: "success", pdf });
  } catch (err) {
    next(err);
  }
};

const uploadFile = async (req, res, next) => {
  try {
    const response = await saleforceService.uploadFile(req.body);
    const pdf = await saleforceService.getFileFromSalesForce(
      response.id,
      req.body
    );
    res.send({ message: "success", pdf });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  generateAccessToken,
  getProfile,
  getObjects,
  getAccounts,
  getAccountDetail,
  updateAccount,
  getContacts,
  getContactById,
  updateContact,
  uploadFileToSalesForce,
  uploadFile,
};
