/* eslint-disable no-console */
// const { Sequelize, Op } = require('sequelize');

// const sequelize = new Sequelize('sqlite::memory:');
const ChannelBlocks = require('../models/channelblocks');

module.exports = async (req, res) => {
  /*  #swagger.parameters['parameter_name'] = {
                in: 'body',
                description: 'Some description...',
                schema: {
                    $name: 'Jhon Doe',
                    $age: 29,
                    about: ''
                }
        } */
  const successMsg = {
    errorFlag: 'false',
    statusCode: '00',
    MSG: 'CHANNEL TRANSACTION DISABLED on A/c.No: 1019463246',
  };
  const errorMsg = {
    errorFlag: 'true',
    statusCode: '08',
    MSG: 'This Account Number: 123456 is invalid, Please input a valid account number!',
  };
  const { ChannelCode, AcctNum, BankId } = req.body;
  const data = {
    user_id: null,
    name: 'FIRSTNAME LASTNAME',
    type: 'UINSTA',
    channelCode: ChannelCode,
    bankId: BankId,
    message: `CHANNEL TRANSACTION DISABLED on A/c.No: ${AcctNum}`,
    acctNumber: AcctNum,
    date: new Date().toISOString(),

  };
  await ChannelBlocks.create(data);
  const blocks = await ChannelBlocks.findAll();
  console.log(data);
  res.status(200).send({
    success: true,
    blocks,
    successMsg,
    errorMsg,
  });
};
