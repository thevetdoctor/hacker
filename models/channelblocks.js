const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const ChannelBlock = sequelize.define('channelblock', {
  user_id: DataTypes.NUMBER,
  name: DataTypes.TEXT,
  type: DataTypes.TEXT,
  channelCode: DataTypes.NUMBER,
  bankId: DataTypes.TEXT,
  message: DataTypes.TEXT,
  acctNumber: DataTypes.NUMBER,
  date: DataTypes.BIGINT,
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
}, { timestamps: false });

module.exports = ChannelBlock;
