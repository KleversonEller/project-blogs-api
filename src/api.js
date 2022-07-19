const express = require('express');
const errorMiddleware = require('./middleware/error');
const router = require('./routers/index');

const app = express();

app.use(express.json());

app.use('/login', router.login);
app.use('/user', router.user);

app.use(errorMiddleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
