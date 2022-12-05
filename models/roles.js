const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Role = sequelize.define('role', {
  role: DataTypes.TEXT,
  date: DataTypes.BIGINT,
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
}, { timestamps: false });

module.exports = Role;
