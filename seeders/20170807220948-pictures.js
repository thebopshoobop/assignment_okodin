"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    let pictures = [];
    for (let i = 1; i < 5; i++) {
      pictures.push({
        fileName: `${i}.jpg`
      });
    }
    return queryInterface.bulkInsert("Pictures", pictures);
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bukDelete(
      "Pictures",
      null,
      {},
      Sequelize.models.Picture
    );
  }
};
