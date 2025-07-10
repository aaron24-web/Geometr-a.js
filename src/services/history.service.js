
const fs = require('fs').promises; // Usamos la versión de promesas del módulo File System
const path = require('path');

// La ruta a nuestro archivo JSON. Usamos path.join para asegurar la compatibilidad entre sistemas operativos.
const historyFilePath = path.join(__dirname, '../../history.json');

/**
 * Lee todo el historial desde el archivo JSON.
 * Si el archivo no existe, devuelve un arreglo vacío.
 * @returns {Promise<Array>}
 */
const getHistory = async () => {
  try {
    const data = await fs.readFile(historyFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // Si el error es que el archivo no existe (ENOENT), es normal la primera vez.
    // Devolvemos un arreglo vacío.
    if (error.code === 'ENOENT') {
      return [];
    }
    // Si es otro tipo de error, lo lanzamos.
    throw error;
  }
};

/**
 * Añade una nueva entrada al historial.
 * @param {object} operationData - Los datos de la operación a guardar.
 */
const addEntry = async (operationData) => {
  // Obtenemos el historial actual.
  const history = await getHistory();

  // Creamos la nueva entrada con una fecha.
  const newEntry = {
    ...operationData,
    timestamp: new Date().toISOString(), // Formato de fecha estándar
  };

  // Añadimos la nueva entrada al arreglo.
  history.push(newEntry);

  // Escribimos el arreglo actualizado de vuelta al archivo.
  // JSON.stringify con 'null, 2' formatea el JSON para que sea legible.
  await fs.writeFile(historyFilePath, JSON.stringify(history, null, 2), 'utf-8');
};

module.exports = {
  addEntry,
  getHistory,
};