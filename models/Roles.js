'use strict';

module.exports = (sequelize, Datatypes) => {
  return sequelize.define(
    'userRoles',
    {
      // foreign key from userbase
      ubid: {
        type: Datatypes.BOOLEAN,
        primaryKey: true,
        allowNull: false,
        validate: { min: 1, max: 255 }
      },
      // foreign key from roleMaster
      roleid: {
        type: Datatypes.BOOLEAN,
        primaryKey: true,
        allowNull: false,
        validate: { min: 1, max: 255 }
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
};
