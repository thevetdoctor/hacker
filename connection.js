const {Sequelize} = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const Transactions = require('./models/transactions');
const Channelblocks = require('./models/channelblocks');

return sequelize.authenticate()
    .then(async result => {
        console.log(`SQLite successfully connected!`);
        await Channelblocks.sync();
        return Transactions.sync();
    })
    .then(result => {
        console.log(`Transactions table created`, result);
        return result;
    })
    .catch(error => {
        console.error('Unable to connect to SQLite database:', error);
    })
