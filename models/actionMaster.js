'use strict';

module.exports = (sequelize, Datatypes) => {
  return sequelize.define(
    'actionMaster',
    {
      // foreign key to roleDetails
      actionid: {
        type: Datatypes.SMALLINT(3).UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate: { min: 1, max: 255 }
      },
      action: {
        type: Datatypes.STRING(16),
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
