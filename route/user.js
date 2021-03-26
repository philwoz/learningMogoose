const express = require('express')
const router = express.Router()

//require method from controller
const {signup} = require('../controllers/user')

router.post('/signup', signup)

module.exports = router