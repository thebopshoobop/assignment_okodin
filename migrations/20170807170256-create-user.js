"use strict";
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable("Users", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        ProfileId: {
          allowNull: true,
          type: Sequelize.INTEGER
        },
        loggedIn: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
        username: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn("NOW")
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn("NOW")
        }
      })
      .then(() => {
        return queryInterface.addIndex("Users", ["username"], { unique: true });
      });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable("Users");
  }
};
