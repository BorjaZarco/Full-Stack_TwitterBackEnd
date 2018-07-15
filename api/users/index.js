const router = require('express').Router();
const controller = require('./users.controller.js');
let npost = 0;


router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', function (req, res) {
    npost++;
    controller.createUser
});
router.delete('/:id', controller.deleteUser);
router.patch('/:id', controller.editUser);

module.exports = router;