'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
              id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
              },
              name: {
                type: Sequelize.[TYPE
                },
                age: {
                  type: Sequelize.[TYPE
                  },
                  address: {
                    type: Sequelize.[TYPE
                    },
                    createdAt: {
                      allowNull: false,
                      type: Sequelize.DATE
                    },
                    updatedAt: {
                      allowNull: false,
                      type: Sequelize.DATE
                    }
                  });
              },
              down: (queryInterface, Sequelize) => {
                return queryInterface.dropTable('Users');
              }
            };