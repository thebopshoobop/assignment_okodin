"use strict";
module.exports = function(sequelize, DataTypes) {
  var ProfileLocation = sequelize.define("ProfileLocation", {
    ProfileId: DataTypes.INTEGER,
    CityId: DataTypes.INTEGER
  });
  ProfileLocation.associate = function(models) {
    ProfileLocation.belongsToMany(models.City);
    ProfileLocation.belongsToMany(models.Profile);
  };
  return ProfileLocation;
};
