const express = require('express')
const router = express.Router()

const controller = require('../controller/controller')

router.get('/', controller.bienvenue)
router.get('/info', controller.info)
router.get('/acces-interdit', controller.accesInterdit)

module.exports = router