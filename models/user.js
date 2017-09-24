'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
          name: DataTypes.STRING,
            age: DataTypes.INTEGER,
              address: DataTypes.STRING
              }, {
                classMethods: {
                  associate: function(models) {
                    // associations can be defined here
                  }
                }
              });
            return User;
          };
