const express = require('express');
const router = express.Router();
const controller = require('../controller/appController');

router.get('/', controller.showAllEntries);
router.post('/', controller.createNewDB_Entry);
router.delete('/:id', controller.deleteEntry);

module.exports = router;