'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config');
const db = {};

console.log(config);

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    port: config.db.port,
    dialect: 'mysql'
  }
);

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// ASSOCIATIONS

// userbase to valid
db.userbase.hasOne(db.valid, {
  as: 'userToValid',
  foreignKey: 'ubid',
  sourceKey: 'ubid'
});
db.valid.belongsTo(db.userbase, {
  as: 'userToValid',
  foreignKey: 'ubid',
  targetKey: 'ubid'
});
// userbase to userRoles
db.userbase.hasMany(db.userRoles, {
  as: 'userToRoles',
  foreignKey: 'ubid',
  sourceKey: 'ubid'
});
db.userRoles.belongsTo(db.userbase, {
  as: 'userToRoles',
  foreignKey: 'ubid',
  targetKey: 'ubid'
});
// userbase to settings
db.userbase.hasOne(db.userSettings, {
  as: 'userToSettings',
  foreignKey: 'ubid',
  sourceKey: 'ubid'
});
db.userSettings.belongsTo(db.userbase, {
  as: 'userToSettings',
  foreignKey: 'ubid',
  targetKey: 'ubid'
});
// roleMaster to userRoles
db.roleMaster.hasMany(db.userRoles, {
  as: 'rolemaster to users',
  foreignKey: 'roleid',
  sourceKey: 'roleid'
});
db.userRoles.belongsTo(db.roleMaster, {
  as: 'rolemaster to users',
  foreignKey: 'roleid',
  targetKey: 'roleid'
});
// roleDetails to roleMaster
db.roleMaster.hasMany(db.roleDetails, {
  as: 'rolemaster to roledetails',
  foreignKey: 'roleid',
  sourceKey: 'roleid'
});
db.roleDetails.belongsTo(db.roleMaster, {
  as: 'rolemaster to roledetails',
  foreignKey: 'roleid',
  targetKey: 'roleid'
});
// actionMaster to roleDetails
db.actionMaster.hasMany(db.roleDetails, {
  as: 'actionmaster to roledetails',
  foreignKey: 'actionid',
  sourceKey: 'actionid'
});
db.roleDetails.belongsTo(db.actionMaster, {
  as: 'actionmaster to roledetails',
  foreignKey: 'actionid',
  targetKey: 'actionid'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db;
