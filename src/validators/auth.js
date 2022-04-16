const { check } = require("express-validator");
const { emailExiste, emailNoExiste } = require('../helpers/email-validators');
const validarCampos = require("../middlewares/validaciones");

const validateRegister = [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('email', 'El email no es valido').isEmail(),
    check('email').custom(emailExiste),
    validarCampos
]

const validateLogin = [
    check('email', 'El email no es valido').isEmail(),
    check('email').custom(emailNoExiste),
    validarCampos
]


module.exports = {
    validateLogin,
    validateRegister
}
