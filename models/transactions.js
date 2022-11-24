const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Transaction = sequelize.define("transaction", {
    user_id: DataTypes.NUMBER,
    name: DataTypes.TEXT,
    acctNumber: DataTypes.NUMBER,
    amount: DataTypes.NUMBER,
    date: DataTypes.BIGINT,
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, {timestamps : false});

module.exports = Transaction;
