"use strict";
module.exports = function(sequelize, DataTypes) {
  var City = sequelize.define("City", {
    name: DataTypes.STRING,
    distance: DataTypes.INTEGER
  });
  City.associate = function(models) {
    City.hasMany(models.ProfileLocation);

    City.belongsToMany(models.Profile, { through: models.ProfileLocation });
  };
  return City;
};
