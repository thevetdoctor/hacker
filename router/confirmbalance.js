// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('sqlite::memory:');
// const Transaction = require('../models/transactions');

module.exports = async (req, res) => {
  if (!req.body.deposit) {
    return res.status(404).send({
      success: false,
      message: 'Insufficient balance',
    });
  }
  return res.status(200).send({
    success: true,
    message: 'Account is well funded',
  });
};
