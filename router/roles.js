const { Sequelize, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const logger = require('../logger');
const User = require('../models/users');
const Action = require('../models/actions');
const Role = require('../models/roles');
const RoleAction = require('../models/roleactions');
const missingInput = require('../helpers/missingInput');
const { ErrorClone } = require('../helpers/error');

module.exports = {
  getRoles: async (req, res) => {
try {
   const roles = await Role.findAll({
    include: [
     { model: Action, through: RoleAction }
    ]
   });
  return res.status(200).send({
    success: true,
    roles,
  });
} catch(e) {
  logger.error(e.message);
}
},

// addUser: async (req, res, next) => {
//   try {
//     // missingInput(['firstName'], req.body);
//     const user = await User.create(req.body);
//     return res.status(200).send({
//       success: true,
//       user,
//     }); 
//   } catch(e) {
//     // logger.error(e.message);
//     next()
//     // throw new ErrorClone(401, `Missing field(s):`);
//   }
//   },

//   updateUser: async (req, res, next) => {
//     try {
//       // missingInput(['firstName'], req.body);
//       const user = await User.create(req.body);
//       return res.status(200).send({
//         success: true,
//         user,
//       }); 
//     } catch(e) {
//       // logger.error(e.message);
//       next()
//       // throw new ErrorClone(401, `Missing field(s):`);
//     }
//     },
}
