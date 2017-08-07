"use strict";
module.exports = function(sequelize, DataTypes) {
  var Talent = sequelize.define("Talent", {
    ProfileId: DataTypes.INTEGER,
    ActivityId: DataTypes.INTEGER
  });
  Talent.associate = function(models) {
    Talent.belongsTo(models.Activity);
    Talent.belongsToMany(models.Profile);
  };
  return Talent;
};
