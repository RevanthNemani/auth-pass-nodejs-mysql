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
db.userbase.hasOne(db.valid);
db.valid.belongsTo(db.userbase, {
  foreignKey: 'ubid',
  targetKey: 'ubid'
});
// userbase to userRoles
db.userbase.hasMany(db.userRoles);
db.userRoles.belongsTo(db.userbase, {
  foreignKey: 'ubid',
  targetKey: 'ubid'
});
// userbase to settings
db.userbase.hasOne(db.userSettings);
db.userSettings.belongsTo(db.userbase, {
  foreignKey: 'ubid',
  targetKey: 'ubid'
});
// roleMaster to userRoles
db.roleMaster.hasMany(db.userRoles);
db.userRoles.belongsTo(db.roleMaster, {
  foreignKey: 'roleid',
  targetKey: 'roleid'
});
// roleMaster to roleDetails
db.roleDetails.hasMany(db.roleMaster);
db.roleMaster.belongsTo(db.roleDetails, {
  foreignKey: 'roleid',
  targetKey: 'roleid'
});
// actionMaster to roleDetails
db.roleDetails.hasMany(db.actionMaster);
db.actionMaster.belongsTo(db.roleDetails, {
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
