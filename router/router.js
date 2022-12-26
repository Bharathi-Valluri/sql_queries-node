const user_controller = require('../controller/userContoller')
const router = require('express').Router()

router.post('/insertTableData', user_controller.insertData)
router.get('/retrieveTableData', user_controller.retrieveData)
router.put('/updateTableData', user_controller.modifyData)
router.delete('/deleteTableData', user_controller.deleteData)
router.post('/saveBulkData', user_controller.bulkInsertion)
router.put('/bulkUpdateData', user_controller.bulkUpdation)

module.exports = router
