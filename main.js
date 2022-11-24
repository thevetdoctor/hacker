const express = require('express');
const parser = require('body-parser');
const routers = require('./router');
const twilio = require('./stuff/twilioSms.js');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json');
const app = express();
require('./connection')

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
routers(app);
// twilio();

app.get('/', (req, res) => {
    res.send({message: 'Here you are!'});
});



app.listen(4000, () => {
    console.log('listening');
})
