const Joi = require("joi");

const gernatePdfHTML = Joi.object({
  html: Joi.string().required(),
  css: Joi.string().required(),
});

const fullDossier = Joi.object({
  profileInfo: Joi.object().required(),
  reference: Joi.object().required(),
  referenceBy: Joi.array().required(),
});

const expressDossier = Joi.object({
  profileInfo: Joi.object().required(),
});

const reference = Joi.object({
  referenceBy: Joi.array().required(),
  ref: Joi.object().required(),
  fileName: Joi.string(),
  contactId: Joi.string().required(),
  contentDocumentID: Joi.string(),
});

module.exports = {
  gernatePdfHTML,
  fullDossier,
  expressDossier,
  reference
};
