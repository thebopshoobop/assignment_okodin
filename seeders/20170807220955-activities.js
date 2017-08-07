"use strict";
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
  up: function(queryInterface, Sequelize) {
    let activities = [];
    activityVar.forEach(i => {
      activities.push({
        name: i
      });
    });
    return queryInterface.bulkInsert("Activities", activities);
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bukDelete(
      "Activities",
      null,
      {},
      Sequelize.models.Activity
    );
  }
};
