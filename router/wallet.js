const {Sequelize} = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const Transaction = require('../models/transactions');

module.exports = async (req, res) => {
    const credit = 200000;
    const debits = await Transaction.findAll({
        attributes: [ [sequelize.fn('sum', sequelize.col('amount')), 'totalDebit'] ],
        raw: true
    });
    const debit = debits[0].totalDebit;
    console.log(debits);
    const data = {
        success: true,
        balance: credit - debit,
        debit,
        credit
    }
    console.log(data);
    res.status(200).send({
        success: true,
        data
    });
};