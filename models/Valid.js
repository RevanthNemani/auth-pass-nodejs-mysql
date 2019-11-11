'use strict';

module.exports = (sequelize, Datatypes) => {
  return sequelize.define(
    'valid',
    {
      // Foreign key from userbase
      ubid: {
        type: Datatypes.BOOLEAN,
        primaryKey: true,
        allowNull: false,
        validate: { min: 1, max: 255 }
      },
      startDt: {
        type: Datatypes.DATE,
        required: true,
        allowNull: false
      },
      expiryDt: {
        type: Datatypes.DATE,
        required: true,
        allowNull: false
      },
      locked: {
        type: Datatypes.BOOLEAN,
        required: true,
        allowNull: false,
        defaultValue: 0,
        validate: { min: 0, max: 1 }
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
};
