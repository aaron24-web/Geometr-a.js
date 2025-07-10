const express = require('express');
const router = express.Router();
const controller = require('../controllers/history.controller.js');

// Define la ruta GET para la raíz de /api/history
router.get('/', controller.viewHistory);

// Exporta el router para que index.js pueda usarlo
module.exports = router;