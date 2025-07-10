// src/api/controllers/calculations.controller.js

const calculationService = require('../../services/calculations.service.js'); // <-- CORREGIDO
const historyService = require('../../services/history.service.js');

const getRectangleArea = async (req, res) => {
  try {
    const { base, height } = req.body;
    const area = calculationService.calculateRectangleArea(base, height);
    
    await historyService.addEntry({
      figure: 'rectángulo',
      calculation: 'área',
      parameters: req.body,
    });

    res.status(200).json({ figure: 'rectángulo', result: area });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getCubeVolume = async (req, res) => {
  try {
    const { side } = req.body;
    const volume = calculationService.calculateCubeVolume(side);
    
    await historyService.addEntry({
      figure: 'cubo',
      calculation: 'volumen',
      parameters: req.body,
    });
    
    res.status(200).json({ figure: 'cubo', result: volume });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getCylinderVolume = async (req, res) => {
  try {
    const { radius, height } = req.body;
    const volume = calculationService.calculateCylinderVolume(radius, height);
    
    await historyService.addEntry({
      figure: 'cilindro',
      calculation: 'volumen',
      parameters: req.body,
    });
    
    res.status(200).json({ figure: 'cilindro', result: volume });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getRectangleArea,
  getCubeVolume,
  getCylinderVolume,
};