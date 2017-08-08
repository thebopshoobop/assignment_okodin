"use strict";
module.exports = function(sequelize, DataTypes) {
  var Picture = sequelize.define("Picture", {
    fileName: DataTypes.STRING
  });
  Picture.associate = function(models) {
    Picture.hasMany(models.Profile);
  };
  return Picture;
};
