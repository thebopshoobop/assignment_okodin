'use strict';
module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define('Profile', {
    name: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    PictureId: DataTypes.INTEGER,
    ProfileLocationId: DataTypes.INTEGER,
    TalentsId: DataTypes.INTEGER,
    FavoriteThingsId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    maritalStatus: DataTypes.BOOLEAN,
    kids: DataTypes.INTEGER,
    aboutMe: DataTypes.TEXT,
    whyMsgMe: DataTypes.TEXT
  });
  Profile.associate = function(models) {
    Profile.hasOne(models.User);
    Profile.hasOne(models.Picture);
    Profile.hasMany(models.ProfileLocation);
    Profile.belongsToMany(models.City,{through:{models.ProfileLocation }});
    Profile.hasMany(models.Talent);
    Profile.belongsToMany(models.Activities,{through:{models.Talent }});
    Profile.hasMany(models.FavoriteThings);
    Profile.belongsToMany(models.Activities,{through:{models.FavoriteThings }});

  };
  return Profile;
};
