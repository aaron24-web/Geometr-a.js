// src/config/swagger.config.js

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Calculadora Geométrica',
    version: '1.0.0',
    description: 'Una API para calcular áreas y volúmenes, y consultar un historial de operaciones.',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Servidor de desarrollo',
    },
  ],
  tags: [
    {
      name: 'Cálculos',
      description: 'Endpoints para cálculos geométricos',
    },
    {
      name: 'Historial',
      description: 'Endpoint para visualizar el historial de operaciones',
    },
  ],
  paths: {
    // --- Rutas de Cálculos (Restauradas) ---
    '/api/calculations/rectangle/area': {
      post: {
        summary: 'Calcula el área de un rectángulo',
        tags: ['Cálculos'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/RectangleInput',
              },
            },
          },
        },
        responses: {
          '200': { description: 'Cálculo exitoso' },
          '400': { description: 'Datos inválidos' },
        },
      },
    },
    '/api/calculations/cube/volume': {
      post: {
        summary: 'Calcula el volumen de un cubo',
        tags: ['Cálculos'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CubeInput',
              },
            },
          },
        },
        responses: {
          '200': { description: 'Cálculo exitoso' },
          '400': { description: 'Datos inválidos' },
        },
      },
    },
    '/api/calculations/cylinder/volume': {
      post: {
        summary: 'Calcula el volumen de un cilindro',
        tags: ['Cálculos'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CylinderInput',
              },
            },
          },
        },
        responses: {
          '200': { description: 'Cálculo exitoso' },
          '400': { description: 'Datos inválidos' },
        },
      },
    },
    // --- Ruta del Historial ---
    '/api/history': {
      get: {
        summary: 'Obtiene el historial de todas las operaciones realizadas',
        tags: ['Historial'],
        responses: {
          '200': {
            description: 'Un arreglo con todas las operaciones guardadas.',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      figure: { type: 'string', example: 'rectángulo' },
                      calculation: { type: 'string', example: 'área' },
                      parameters: { type: 'object' },
                      timestamp: { type: 'string', format: 'date-time' },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      RectangleInput: {
        type: 'object',
        properties: {
          base: { type: 'number', example: 10 },
          height: { type: 'number', example: 5 },
        },
        required: ['base', 'height'],
      },
      CubeInput: {
        type: 'object',
        properties: {
          side: { type: 'number', example: 4 },
        },
        required: ['side'],
      },
      CylinderInput: {
        type: 'object',
        properties: {
          radius: { type: 'number', example: 3 },
          height: { type: 'number', example: 10 },
        },
        required: ['radius', 'height'],
      },
    },
  },
};

module.exports = swaggerDefinition;