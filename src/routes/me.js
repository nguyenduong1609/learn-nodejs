const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/khoahoc', meController.storedKhoahoc);
router.get('/recycle/khoahoc', meController.recycleKhoahoc);

module.exports = router;
