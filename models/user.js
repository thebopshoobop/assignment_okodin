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
  User.afterCreate((user, options) => {
    return sequelize.models.Profile
      .findOrCreate({
        defaults: { UserId: user.id },
        where: { UserId: user.id },
        transaction: options.transaction
      })
      .spread(result => {
        return user.update(
          { ProfileId: result.id },
          {
            where: { id: user.id },
            transaction: options.transaction
          }
        );
      });
  });
  return User;
};
