const { Router } = require('express');
// const { check } = require('express-validator');
const { getAllTask, getTaskByID, createTask } = require('../controllers/task.controller');
const router = Router();

router.get('/', getAllTask);
router.get('/:id', getTaskByID);
router.post('/', createTask);
// router.put('/:id', updateTask);
// router.delete('/:id', deleteTask);
// router.post('/share', shareTask);

module.exports = router;