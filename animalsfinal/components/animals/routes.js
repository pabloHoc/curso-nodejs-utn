const controller = require('./controller');
const roleChecker = require('./../../middlewares/roleChecker');
const ROLES = require('./../users/roles');
const express = require('express');
const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.post('/', controller.add);
router.put('/:id', controller.update);
router.delete('/:id', roleChecker(ROLES.ADMIN), controller.delete);

module.exports = router;