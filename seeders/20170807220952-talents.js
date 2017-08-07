'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    let talents = [];
    for (let i = 1; i < 11; i++) {
      locations.push({
        ProfileId: i,
        ActivityId: i
      });
    }
      return queryInterface.bulkInsert("Talents", talents);
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bukDelete(
      "Talents",
      null,
      {},
      Sequelize.models.Talent
    );
  }
};
};
