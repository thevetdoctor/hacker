/* eslint-disable no-console */
const express = require('express');
const parser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const routers = require('./router');
// const twilio = require('./stuff/twilioSms.js');
const swaggerFile = require('./docs/swagger_output.json');
const logger = require("./logger");
const redis = require("redis");
const axios = require("axios");

const REDIS_PORT = process.env.PORT || 6379;
const APP_PORT = process.env.PORT || 4005;
 
// const redisClient = redis.createClient(REDIS_PORT);

const app = express();
// const db = require('./models/index');
require('./connection');

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
routers(app);
// twilio();

app.get('/', (req, res) => {
  res.send({ message: 'Here you are!' });
});

// Handles all errors
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(err.status || 400).send({ success: false });
  }
  if (err) logger.error(`Error: ${err.message}`);
  return res
    .status(err.status || 400)
    .send({ success: false, message: err.message });
});

app.listen(APP_PORT, () => {
  logger.info(`Server listening @ port: ${APP_PORT}`);
});
