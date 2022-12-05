/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const Transactions = require('./models/transactions');
const Channelblocks = require('./models/channelblocks');
const Users = require('./models/users');
const Roles = require('./models/roles');
const UserRoles = require('./models/userroles');
const Actions = require('./models/actions');
const RoleActions = require('./models/roleactions');
const logger = require("./logger");
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const db = {
  transaction: Transactions,
  channelblock: Channelblocks,
  user: Users,
  role: Roles,
  userrole: UserRoles,
  action: Actions,
  roleaction: RoleActions,
};

// fs.readdirSync(path.join(__dirname, 'models'))
//   .filter((file) => {
//     console.log(file);
//     return (
//       file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
//     );
//   })
//   .forEach((file) => {
//     console.log(file, path.join(__dirname, 'models', file));
//     // const model = require(path.join(__dirname, 'models', file));
//     // console.log(model(sequelize, DataTypes));
//     // db[model.name] = model;
//   });

Object.keys(db).forEach((modelName) => {
  console.log(modelName)
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize.authenticate()
  .then(async (result) => {
    logger.info('SQLite successfully connected!');
    await Channelblocks.sync();
    await Users.sync();
    await Roles.sync();
    await UserRoles.sync();
    await Actions.sync();
    await RoleActions.sync();
    return Transactions.sync();
  })
  .then((result) => {
    logger.info('Transactions table created', result);
    return result;
  })
  .catch((error) => {
    logger.error('Unable to connect to SQLite database:', error);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.role.belongsToMany(db.user, {
  foreignKey: "roleId",
  through: db.userrole
});

db.user.belongsToMany(db.role, {
  foreignKey: "userId",
  through: db.userrole
});

db.role.belongsToMany(db.action, {
  foreignKey: "roleId",
  through: db.roleaction
});

db.action.belongsToMany(db.role, {
  foreignKey: "actionId",
  through: db.roleaction
});

module.exports = sequelize;
