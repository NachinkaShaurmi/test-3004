const Router = require('express').Router
const testTblController = require('../controller/testtbl.controller')
const router = new Router()

router.post('/data', testTblController.createData)
router.get('/data', testTblController.getData)
// router.get('/filter', testTblController.getFilteredData)
// router.get('/sorted', testTblController.getSortedData)

module.exports = router