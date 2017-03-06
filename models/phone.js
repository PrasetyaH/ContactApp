'use strict';
module.exports = function(sequelize, DataTypes) {
  var Phone = sequelize.define('Phone', {
    number: DataTypes.STRING,
    provider: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Phone.belongsTo(models.User);
      }
    }
  });
  return Phone;
};