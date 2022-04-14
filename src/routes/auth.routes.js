const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario } = require('../controllers/auth.controller');
const { emailExiste } = require('../helpers/db-validators');
const validarCampos = require('../middlewares/validaciones');
const router = Router();

router.post('/new', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('email', 'El email no es valido').isEmail(),
    check('email').custom(emailExiste),
    validarCampos
],
    crearUsuario);

router.post('/renew', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('email', 'El email no es valido').isEmail(),
    validarCampos
], loginUsuario);

module.exports = router;