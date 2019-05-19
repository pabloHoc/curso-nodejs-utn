const controller = require('./controller');
const express = require('express');
const router = express.Router();

router.post('/signin', controller.signIn);
router.post('/login', controller.login);

module.exports = router;