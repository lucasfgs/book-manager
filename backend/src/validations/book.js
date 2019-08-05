const Joi = require("@hapi/joi");

//Register validation
const registerValidaion = book => {
  const schema = {
    nome: Joi.string().required(),
    autor: Joi.string().required(),
    genero: Joi.string().required(),
    sinopse: Joi.string().required(),
    image: Joi.string().required()
  };

  return Joi.validate(book, schema);
};

module.exports.registerValidaion = registerValidaion;
