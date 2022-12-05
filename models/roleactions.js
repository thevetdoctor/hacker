const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const RoleAction = sequelize.define('roleaction', {
  roleId: DataTypes.INTEGER,
  actionId: DataTypes.INTEGER,
  date: DataTypes.BIGINT,
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
}, { timestamps: false });

module.exports = RoleAction;
