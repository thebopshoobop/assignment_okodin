"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    let favoriteThings = [];
    for (let i = 1; i < 11; i++) {
      favoriteThings.push({
        ProfileId: i,
        ActivityId: i
      });
    }
    return queryInterface.bulkInsert("FavoriteThings", favoriteThings);
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bukDelete(
      "FavoriteThings",
      null,
      {},
      Sequelize.models.FavoriteThing
    );
  }
};
