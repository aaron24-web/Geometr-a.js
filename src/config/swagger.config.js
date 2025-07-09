// src/config/swagger.config.js

const swaggerDefinition = {
  // La línea de versión, crucial para que Swagger funcione.
  openapi: '3.0.0',

  info: {
    title: 'API Calculadora Geométrica',
    version: '1.0.0',
    description: 'Una API para calcular áreas y volúmenes de figuras geométricas, definida directamente como un objeto de JS.',
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
  ],
  // Definición de todas las rutas de la API.
  paths: {
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
          '200': {
            description: 'Cálculo exitoso',
          },
          '400': {
            description: 'Datos inválidos',
          },
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
          '200': {
            description: 'Cálculo exitoso',
          },
          '400': {
            description: 'Datos inválidos',
          },
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
          '200': {
            description: 'Cálculo exitoso',
          },
          '400': {
            description: 'Datos inválidos',
          },
        },
      },
    },
  },
  // Definición de los esquemas de datos reutilizables.
  components: {
    schemas: {
      RectangleInput: {
        type: 'object',
        properties: {
          base: {
            type: 'number',
            description: 'La base del rectángulo.',
            example: 10,
          },
          height: {
            type: 'number',
            description: 'La altura del rectángulo.',
            example: 5,
          },
        },
        required: ['base', 'height'],
      },
      CubeInput: {
        type: 'object',
        properties: {
          side: {
            type: 'number',
            description: 'La longitud de un lado del cubo.',
            example: 4,
          },
        },
        required: ['side'],
      },
      CylinderInput: {
        type: 'object',
        properties: {
          radius: {
            type: 'number',
            description: 'El radio de la base del cilindro.',
            example: 3,
          },
          height: {
            type: 'number',
            description: 'La altura del cilindro.',
            example: 10,
          },
        },
        required: ['radius', 'height'],
      },
    },
  },
};

module.exports = swaggerDefinition;