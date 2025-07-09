const express = require('express');
const router = express.Router();
const controller = require('../controllers/calculations.controller.js');

/**
 * @swagger
 * /api/calculations/rectangle/area:
 * post:
 * summary: Calcula el área de un rectángulo.
 * description: Un endpoint de prueba para verificar si Swagger funciona.
 * responses:
 * 200:
 * description: OK
 */
router.post('/rectangle/area', controller.getRectangleArea);

// Las otras rutas siguen sin documentación para mantenerlo simple.
router.post('/cube/volume', controller.getCubeVolume);
router.post('/cylinder/volume', controller.getCylinderVolume);

module.exports = router;