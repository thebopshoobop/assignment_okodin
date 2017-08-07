"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    let locations = [];
    for (let i = 1; i < 11; i++) {
      locations.push({
        ProfileId: i,
        CityId: i
      });
    }
    return queryInterface.bulkInsert("Locations", locations);
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bukDelete(
      "Locations",
      null,
      {},
      Sequelize.models.Location
    );
  }
};
