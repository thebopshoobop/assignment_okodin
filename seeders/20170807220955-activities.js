'use strict';
var activityVar = [
  "Running",
  "Pillaging",
  "Burning",
  "Sewing",
  "Baking",
  "Murdering",
  "Drinking",
  "Feasting",
  "Sailing",
  "Unicorn_Riding"
];
module.exports = {
  up: function (queryInterface, Sequelize) {
      let activites = [];
      activityVar.forEach(i => {
        activites.push({
          name: i
        });
      });
        return queryInterface.bulkInsert("Activites", activites);
    },

    down: function(queryInterface, Sequelize) {
      return queryInterface.bukDelete(
        "Activites",
        null,
        {},
        Sequelize.models.Activity
      );
    }
  };
  };
