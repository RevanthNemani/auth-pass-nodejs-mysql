'use strict';

/* now add the TIMESTAMP type
const TIMESTAMP = require('sequelize-mysql-timestamp')(Sequelize);
*/
module.exports = (sequelize, Datatypes) => {
  return sequelize.define(
    'userbase',
    {
      /* foreign key to
       * userSettings,
       * valid,
       * userRoles,
       * userSettings
       */
      ubid: {
        type: Datatypes.BOOLEAN,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate: { min: 1, max: 255 }
      },
      firstName: {
        type: Datatypes.STRING(45),
        required: true,
        allowNull: false,
        validate: {
          isAlphanumeric: true,
          len: [1, 45]
        }
      },
      lastName: {
        type: Datatypes.STRING(45),
        required: true,
        allowNull: false,
        validate: {
          len: [1, 45]
        }
      },
      username: {
        type: Datatypes.STRING(20),
        required: true,
        allowNull: false,
        validate: {
          len: [6, 20]
        }
      },
      password: {
        type: Datatypes.STRING(128),
        required: true,
        allowNull: false,
        validate: {
          len: [6, 128]
        }
      },
      createdOn: {
        type: Datatypes.DATE,
        required: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedOn: {
        type: Datatypes.DATE,
        required: true,
        defaultValue: sequelize.literal(
          'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
        )
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
};
