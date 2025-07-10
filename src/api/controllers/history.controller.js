
const historyService = require('../../services/history.service.js');

const viewHistory = async (req, res) => {
  try {
    const history = await historyService.getHistory();
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: 'Error al leer el historial.' });
  }
};

module.exports = {
  viewHistory,
};