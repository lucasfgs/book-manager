const Joi = require("@hapi/joi");

//Register validation
const registerValidaion = user => {
  const schema = {
    nome: Joi.string().required(),
    email: Joi.string()
      .required()
      .email(),
    senha: Joi.string()
      .min(8)
      .required()
  };

  return Joi.validate(user, schema);
};

module.exports.registerValidaion = registerValidaion;
