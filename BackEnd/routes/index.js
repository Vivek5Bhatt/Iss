const express = require("express");
const pdfRoutes = require("./pdfGenerator.route");
const salesforceRoutes = require("./salesforce.route");

const router = express.Router();

router.use("/pdf", pdfRoutes);
router.use("/salesforce", salesforceRoutes);

module.exports = router;
