const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config();

const doc = {
  info: {
    title: 'Serial Microsservice',
    description: 'Microsservice for Serial Communication With NodeJS',
  },
  host: process.env.HOST || 'localhost:3000',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
};

const outputFile = './docs/swagger.json';
const routes = [
  './src/@module/application/router/http/express/app.router.ts',
  './src/@module/application/router/http/express/docs.router.ts',

  './src/@module/application/router/http/express/telemetry/powertrain.router.ts',
  './src/@module/application/router/http/express/telemetry/battery.router.ts',
  './src/@module/application/router/http/express/telemetry/geography.router.ts',

  './src/@module/application/router/http/sse/express/telemetry/powertrain.router.ts',
  './src/@module/application/router/http/sse/express/telemetry/battery.router.ts',
  './src/@module/application/router/http/sse/express/telemetry/geography.router.ts',
];

swaggerAutogen(outputFile, routes, doc);
