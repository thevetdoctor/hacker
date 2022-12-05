const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Action = sequelize.define('action', {
  action: DataTypes.TEXT,
  date: DataTypes.BIGINT,
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
}, { timestamps: false });

module.exports = Action;
