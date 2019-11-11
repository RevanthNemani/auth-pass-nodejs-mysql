'use strict';

module.exports = (sequelize, Datatypes) => {
  return sequelize.define(
    'roleMaster',
    {
      // foreign key to userRoles
      roleid: {
        type: Datatypes.SMALLINT(3).UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate: { min: 1, max: 255 }
      },
      role: {
        type: Datatypes.STRING(20),
        unique: true,
        allowNull: false,
        validate: { isAlpha: true }
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
};
