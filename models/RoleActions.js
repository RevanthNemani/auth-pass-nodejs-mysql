'use strict';

module.exports = (sequelize, Datatypes) => {
  return sequelize.define(
    'roleDetails',
    {
      // foreign key from roleMaster
      roleid: {
        type: Datatypes.SMALLINT(3).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        validate: { min: 1, max: 255 }
      },
      // foreign key from actionMaster
      actionid: {
        type: Datatypes.SMALLINT(3).UNSIGNED,
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
