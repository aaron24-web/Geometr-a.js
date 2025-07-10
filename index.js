const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('./src/config/swagger.config.js');
const calculationRoutes = require('./src/api/routes/calculations.routes.js');
const historyRoutes = require('./src/api/routes/history.routes.js');

const app = express();
const port = 3000;

app.use(express.json());

// Las rutas se registran aquí
app.use('/api/calculations', calculationRoutes);
app.use('/api/history', historyRoutes);

// La documentación de Swagger se registra aquí
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));

app.get('/', (req, res) => {
  res.send('<h1>¡La API está funcionando!</h1><p>Ve a <a href="/api-docs">/api-docs</a> para ver la documentación interactiva.</p>');
});

app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
  console.log(`📚 Documentación de API disponible en http://localhost:${port}/api-docs`);
});