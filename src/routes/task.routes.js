const { Router } = require('express');
const { check } = require('express-validator');
const { getAllTask, getTaskByID, createTask } = require('../controllers/task.controller');
const validarCampos = require('../middlewares/validaciones');
const router = Router();

router.get('/', getAllTask);
router.get('/:id', getTaskByID);
router.post('/', [
    check('titulo', 'El titulo es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatorio').not().isEmpty(),
    validarCampos
], createTask);

// router.put('/:id', updateTask);
// router.delete('/:id', deleteTask);
// router.post('/share', shareTask);

module.exports = router;