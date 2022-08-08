const express = require('express');
const swaggerUi = require('swagger-ui-express');
const errorMiddleware = require('./middleware/error');
const router = require('./routers/index');
const swaggerFile = require('../swagger_output.json');

const app = express();

app.use(express.json());

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/login', router.login);
app.use('/user', router.user);
app.use('/categories', router.category);
app.use('/post', router.post);

app.use(errorMiddleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
