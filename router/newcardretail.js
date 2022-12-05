// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('sqlite::memory:');
// const Transaction = require('../models/transactions');

module.exports = async (req, res) => {
  const data = req.body;
  res.status(200).send({
    success: true,
    data,
    message: 'New card created successfully',
  });
};
