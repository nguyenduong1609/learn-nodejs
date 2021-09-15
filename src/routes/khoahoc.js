const express = require('express');
const router = express.Router();

const khoahocController = require('../app/controllers/khoahocController');

router.get('/create', khoahocController.create);
router.post('/store', khoahocController.store);
router.get('/:id/edit', khoahocController.edit);
router.put('/:id', khoahocController.update);
router.patch('/:id/restore', khoahocController.restore);
router.delete('/:id', khoahocController.delete);
router.delete('/:id/norestore', khoahocController.deletenorestore);
router.get('/:slug', khoahocController.show);

module.exports = router;
