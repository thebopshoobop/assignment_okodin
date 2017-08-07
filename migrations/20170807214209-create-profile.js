"use strict";
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable("Profiles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      PictureId: {
        type: Sequelize.INTEGER
      },
      ProfileLocationId: {
        type: Sequelize.INTEGER
      },
      TalentsId: {
        type: Sequelize.INTEGER
      },
      FavoriteThingsId: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      maritalStatus: {
        type: Sequelize.BOOLEAN
      },
      kids: {
        type: Sequelize.INTEGER
      },
      aboutMe: {
        type: Sequelize.TEXT
      },
      whyMsgMe: {
        type: Sequelize.TEXT
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
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable("Profiles");
  }
};
