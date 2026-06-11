const express = require('express')
const router = express.Router();
const userController = require('../controller/user')
const loginController = require('../controller/login.controller')

router.post('/register',userController)
router.post('/login',loginController)

module.exports = router;