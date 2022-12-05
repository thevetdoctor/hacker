/* eslint-disable no-console */
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const Transaction = require('../models/transactions');
const mandate =  require('../stuff/baseImage');
// const { schedule } = require('../stuff/schedule');
const redis = require("redis");
const axios = require("axios");
const logger = require("../logger");
const REDIS_PORT = process.env.PORT || 6379;
const redisClient = redis.createClient(REDIS_PORT);
async function rd() {
  await redisClient.connect();
}
rd();
redisClient.on('error', (err) => console.log('Redis Client Error', err));

module.exports = async (req, res) => {
  logger.profile('mandate');
  // schedule();
  try {
    const id = 2;
    // const { id } = req.params;
    // const starShipInfo = await axios.get(
    //   `https://jsonplaceholder.typicode.com/todos`
    // ).then((response) => {
    //   console.log(response);
    // }, (error) => {
    //   console.log(error);
    // });
    const transactions = await Transaction.findAll();
    // const starShipInfoData = starShipInfo.data;
    redisClient.set(id, JSON.stringify(transactions));

    mandate();
    logger.profile('mandate');
    return res.status(200).send({ 
      success: true,
      // data: starShipInfoData,
      message: 'Mandates successfully updated'
    });
  } catch (error) {
    console.log(error); 
    return res.status(500).json(error);
  }
};
