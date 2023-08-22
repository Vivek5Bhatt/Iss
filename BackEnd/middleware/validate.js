const APIError = require("../helpers/errors/apiError");

exports.validate = (schema) => (req, res, next) => {
  try {
    const { error } = schema.validate(req.body);
    if (error) {
      // res.status(422).send(error.details[0].message);
      throw new APIError({
        status: 422,
        message: error.details[0].message,
      });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};
