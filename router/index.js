const express = require('express');
const router = express.Router();
const ChannelBlocks = require('../models/channelblocks');
const channel = require('./channel');
const corporate = require('./corporate');
const wallet = require('./wallet');
const transactions = require('./transactions');
const account = require('./account');
const verifyauth = require('./verifyauth');
const newcardretail = require('./newcardretail');
const confirmbalance = require('./confirmbalance');
const newcardcorporate = require('./newcardcorporate');
const retrievebvn = require('./retrievebvn');
const login = require('./login');

const routers = (app) => {
    app.use('/', router.post('/accounts/channelblocking', async (req, res) => {
        /*  #swagger.tags = ['User']
            #swagger.description = 'Endpoint to get the specific user.' */
        const successMsg = {
        "errorFlag": "false",
        "statusCode": "00",
        "MSG": "CHANNEL TRANSACTION DISABLED on A/c.No: 1019463246"
        }
        const errorMsg = {
            "errorFlag": "true",
            "statusCode": "08",
            "MSG":"This Account Number: 123456 is invalid, Please input a valid account number!"
            }
        const { ChannelCode, AcctNum, BankId } = req.body;
        const data = {
            user_id: null,
            name: 'FIRSTNAME LASTNAME',
            type: 'UINSTA',
            channelCode: ChannelCode,
            bankId: BankId,
            message: `CHANNEL TRANSACTION DISABLED on A/c.No: ${AcctNum}`,
            acctNumber: AcctNum,
            date: new Date().toISOString()
            
        };
        const blockNew = await ChannelBlocks.create(data);
        const blocks = await ChannelBlocks.findAll();
        res.status(200).send({
            success: true,
            blocks,
            successMsg,
            errorMsg
        });
        }
        ));
    app.use('/', router.post('/accounts/createaccountcorporate', corporate));
    app.use('/', router.post('/auth/login', login));
    app.use('/', router.get('/accounts/wallets', wallet));
    app.use('/', router.post('/accounts/transactions', transactions.makeTransfer));
    app.use('/', router.get('/accounts/transactions', transactions.getTransactions));
    app.use('/', router.get('/accounts/getaccounts', account));
    app.use('/', router.post('/accounts/retrievebvn', retrievebvn));
    app.use('/', router.post('/auth/verifyauth', verifyauth));
    app.use('/', router.post('/cards/confirmbalance', confirmbalance));
    app.use('/', router.post('/cards/newrequest/retail', newcardretail));
    app.use('/', router.post('/cards/newrequest/corporate', newcardcorporate));
}

module.exports = routers;