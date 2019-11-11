'use strict';

module.exports = (sequelize, Datatypes) => {
  return sequelize.define(
    'userSettings',
    {
      // foreign key from userbase
      ubid: {
        type: Datatypes.SMALLINT(3).UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        validate: { min: 1, max: 255 }
      },
      setting1: {
        type: Datatypes.BOOLEAN,
        required: true,
        allowNull: false,
        defaultValue: 0,
        validate: { min: 0, max: 1 }
      },
      setting2: {
        type: Datatypes.BOOLEAN,
        required: true,
        allowNull: false,
        defaultValue: 0,
        validate: { min: 0, max: 1 }
      },
      setting3: {
        type: Datatypes.BOOLEAN,
        required: true,
        allowNull: false,
        defaultValue: 0,
        validate: { min: 0, max: 1 }
      },
      setting4: {
        type: Datatypes.BOOLEAN,
        required: true,
        allowNull: false,
        defaultValue: 0,
        validate: { min: 0, max: 1 }
      },
      setting5: {
        type: Datatypes.BOOLEAN,
        required: true,
        allowNull: false,
        defaultValue: 0,
        validate: { min: 0, max: 1 }
      },
      setting6: {
        type: Datatypes.BOOLEAN,
        required: true,
        allowNull: false,
        defaultValue: 0,
        validate: { min: 0, max: 1 }
      },
      setting7: {
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
