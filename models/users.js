const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('user', {
  firstName: DataTypes.TEXT,
  lastName: DataTypes.TEXT,
  email: DataTypes.TEXT,
  mobile: DataTypes.TEXT,
  date: DataTypes.BIGINT,
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
}, { timestamps: false });

module.exports = User;
