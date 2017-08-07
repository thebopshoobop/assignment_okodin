"use strict";
module.exports = function(sequelize, DataTypes) {
  var Activity = sequelize.define("Activity", {
    name: DataTypes.STRING
  });
  Activity.associate = function(models) {
    Activity.hasMany(models.Talent);
    Activity.hasMany(models.FavoriteThing);
    Activity.belongsToMany(models.Profile, { through: models.FavoriteThing });
    Activity.belongsToMany(models.Profile, { through: models.Talent });
  };
  return Activity;
};
