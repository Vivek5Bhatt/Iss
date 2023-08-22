const express = require("express");

const salesforceController = require("../controllers/salesforce.controller");

const router = express.Router();

router.route("/get-access-token").get(salesforceController.generateAccessToken);
router.route("/get-profile").post(salesforceController.getProfile);
router.route("/get-objects").post(salesforceController.getObjects);
router.route("/get-accounts-list").post(salesforceController.getAccounts);
router.route("/get-account-detail").post(salesforceController.getAccountDetail);
router.route("/get-contacts").post(salesforceController.getContacts);
router.route("/get-contact-detail").post(salesforceController.getContactById);
router.route("/update-contact").put(salesforceController.updateContact);
router.route("/update-account").put(salesforceController.updateAccount);
router.route("/upload-pdf").post(salesforceController.uploadFileToSalesForce);

module.exports = router;
