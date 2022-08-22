const { validationResult } = require("express-validator");

//REQ, RES Y NEXT (NEXT para que sigo la siguiente comprobacion de un middleware)
const validarCampos = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};

module.exports = {
  validarCampos,
};
