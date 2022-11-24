const {Sequelize, Op} = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const Transaction = require('../models/transactions');

module.exports = {
    makeTransfer: async (req, res) => {
        const credit = 200000;
        const debits = await Transaction.findAll({
            attributes: [ [sequelize.fn('sum', sequelize.col('amount')), 'totalDebit'] ],
            raw: true
        });
        const debit = debits[0].totalDebit;
        const balance = credit - debit;
        if (req.body.amount > balance) {
            return res.status(404).send({
                success: false,
                message: 'Insufficient balance'
            });
        }
    req.body.date = new Date().toISOString();
    const data = (await Transaction.create(req.body)).get({plain:true});
    res.status(200).send({
        success: true,
        data
    });
},
getTransactions: async (req, res) => {
    const { page, pageSize, search } = req.query;
    const pageTag = Number(page) || 1;
	const pageSizeTag = Number(pageSize) || 10;
    let filter = {};
    try {
        if (search && search !== 'undefined') {
            const fieldsToSearch = [
                'name',
                'acctNumber',
                'amount',
                // 'date'
            ];
            filter = {
                [Op.or]: fieldsToSearch.map((field) => ({
                    [field]: { [Op.like]: `%${search}%` },
                    ...filter,
                })),
            }; 
        }
        const transactions = await Transaction.findAll({
            where: filter,
            raw: true
        });
        res.status(200).send({ 
            success: true,
            data: transactions,
            page: pageTag,
            pageSize: pageSizeTag,
        });
    } catch (error) {
        console.error(error);
    }
    }
};