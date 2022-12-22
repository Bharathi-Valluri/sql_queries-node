const user_controller = require('../controller/userContoller')
const router = require('express').Router()
router.post('/insertTableData', user_controller.insertData)
router.get('/retrieveTableData', user_controller.retrieveData)
router.put('/updateTableData', user_controller.modifyData)
router.delete('/deleteTableData', user_controller.deleteData)

module.exports = router
