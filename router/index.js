const express = require('express');

const router = express.Router();
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
const mandate = require('./mandate');
const users = require('./users');
const roles = require('./roles');

const routers = (app) => {
  app.use('/', router.post('/accounts/channelblocking', channel));
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
  app.use('/', router.get('/mandate', mandate));
  app.use('/', router.get('/users', users.getUsers));
  app.use('/', router.post('/users', users.addUser));
  // app.use('/', router.get('/roles', roles.getRoles));
};

module.exports = routers;
