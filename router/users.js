const { Sequelize, Model } = require('sequelize');
const logger = require('../logger');
const sequelize = new Sequelize('sqlite::memory:');
const User = require('../models/users');
const UserRole = require('../models/userroles');
const missingInput = require('../helpers/missingInput');
const { ErrorClone } = require('../helpers/error');
const Role = require('../models/roles');
const RoleAction = require('../models/roleactions');

module.exports = {
  getUsers: async (req, res) => {
try {
   const users = await User.findAll({
    include: [
     { model: Role, through: UserRole }
    ]
   });
  return res.status(200).send({
    success: true,
    users,
  });
} catch(e) {
  logger.error(e.message);
}
},

addUser: async (req, res, next) => {
  try {
    // missingInput(['firstName'], req.body);
    const user = await User.create(req.body);
    return res.status(200).send({
      success: true,
      user,
    }); 
  } catch(e) {
    // logger.error(e.message);
    next()
    // throw new ErrorClone(401, `Missing field(s):`);
  }
  },

  updateUser: async (req, res, next) => {
    try {
      // missingInput(['firstName'], req.body);
      const user = await User.create(req.body);
      return res.status(200).send({
        success: true,
        user,
      }); 
    } catch(e) {
      // logger.error(e.message);
      next()
      // throw new ErrorClone(401, `Missing field(s):`);
    }
    },
}
