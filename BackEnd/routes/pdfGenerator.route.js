const express = require("express");
const router = express.Router();
const pdfGenerator = require("../controllers/pdfGenerator.controller");
const { validate } = require("../middleware/validate");
const {
  fullDossier,
  expressDossier,
  reference
} = require("../validations/pdfGeneration.validations");

router.route("/test").get(pdfGenerator.testFunction);
router.route("/generate-pdf-from-html").post(pdfGenerator.generatePdfFromHTML);
router.route("/generate-pdf-from-doc").post(pdfGenerator.gernatePdfFromDoc);
router.route("/merge-pdf").post(pdfGenerator.mergePdf);
router.route("/get-data").get(pdfGenerator.getUserData);
router
  .route("/full-dossier")
  .post(validate(fullDossier), pdfGenerator.fullDossier);
router
  .route("/express-dossier")
  .post(validate(expressDossier), pdfGenerator.expressDossier);
router
  .route("/reference")
  .post(validate(reference), pdfGenerator.reference);

module.exports = router;
