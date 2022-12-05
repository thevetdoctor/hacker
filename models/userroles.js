const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const UserRole = sequelize.define('userrole', {
  roleId: DataTypes.INTEGER,
  userId: DataTypes.INTEGER,
  date: DataTypes.BIGINT,
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
}, { timestamps: false });

module.exports = UserRole;
