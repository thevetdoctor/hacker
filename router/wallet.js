/* eslint-disable no-console */
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');
const Transaction = require('../models/transactions');

module.exports = async (req, res) => {
  const balance = 200000; // fetch this f rom the account balance API
  // get the total transfers from the Transactions table
  const debits = await Transaction.findAll({
    attributes: [[sequelize.fn('sum', sequelize.col('amount')), 'totalDebit']],
    raw: true,
  });
  const debit = debits[0].totalDebit;
  console.log(debits);
  const data = {
    success: true,
    balance,
    debit,
    credit: debit + balance
  };
  console.log(data);
  res.status(200).send({
    success: true,
    data,
  });
};
