const router = require('express').Router();
const controller = require('./users.controller.js');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.createUser);
router.delete('/:id', controller.deleteUser);
router.patch('/:id', controller.editUser);

module.exports = router;