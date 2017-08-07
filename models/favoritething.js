"use strict";
module.exports = function(sequelize, DataTypes) {
  var FavoriteThing = sequelize.define("FavoriteThing", {
    ProfileId: DataTypes.INTEGER,
    ActivityId: DataTypes.INTEGER
  });
  FavoriteThing.associate = function(models) {
    FavoriteThing.belongsTo(models.Activity);
    FavoriteThing.belongsToMany(models.Profile);
  };
  return FavoriteThing;
};
