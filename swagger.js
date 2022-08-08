const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointFiles = ['./src/routers/postsRouter.js'];

swaggerAutogen(outputFile, endpointFiles);