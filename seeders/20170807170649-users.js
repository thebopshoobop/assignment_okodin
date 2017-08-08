"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    let users = [];
    for (let i = 1; i < 11; i++) {
      users.push({
        username: `User${i}`,
        ProfileId: i
      });
    }
    return queryInterface.bulkInsert("Users", users);
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bukDelete("Users", null, {}, Sequelize.models.User);
  }
};
