"use strict";
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    ProfileId: DataTypes.INTEGER,
    username: DataTypes.STRING,
    loggedIn: DataTypes.BOOLEAN
  });
  User.associate = function(models) {
    User.hasOne(models.Profile);
  };
  return User;
};
