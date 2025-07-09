const express = require('express');
const swaggerUi = require('swagger-ui-express'); // <--- Línea restaurada

// Importamos directamente nuestro objeto de definición
const swaggerDefinition = require('./src/config/swagger.config.js');
const calculationRoutes = require('./src/api/routes/calculations.routes.js');

const app = express();
const port = 3000;

app.use(express.json());

// La API sigue funcionando aquí
app.use('/api/calculations', calculationRoutes);

// --- SECCIÓN RESTAURADA ---
// Pasamos el objeto de definición directamente a swagger-ui-express
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));
// -------------------------

app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
  // Volvemos a añadir el mensaje de la documentación
  console.log(`📚 Documentación de API disponible en http://localhost:${port}/api-docs`);
});