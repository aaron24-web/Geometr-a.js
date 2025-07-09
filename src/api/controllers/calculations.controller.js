const calculationService = require('../../services/calculation.service.js');

const getRectangleArea = (req, res) => {
  try {
    const { base, height } = req.body;
    const area = calculationService.calculateRectangleArea(base, height);
    res.status(200).json({ figure: 'rectángulo', result: area });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getCubeVolume = (req, res) => {
  try {
    const { side } = req.body;
    const volume = calculationService.calculateCubeVolume(side);
    res.status(200).json({ figure: 'cubo', result: volume });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getCylinderVolume = (req, res) => {
  try {
    const { radius, height } = req.body;
    const volume = calculationService.calculateCylinderVolume(radius, height);
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