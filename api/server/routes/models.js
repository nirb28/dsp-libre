const express = require('express');
const { modelController, reloadModelsController } = require('~/server/controllers/ModelController');
const { requireJwtAuth } = require('~/server/middleware/');

const router = express.Router();
router.get('/', requireJwtAuth, modelController);
router.post('/reload', requireJwtAuth, reloadModelsController);

module.exports = router;
