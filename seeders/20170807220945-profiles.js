"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    let profiles = [];
    for (let i = 1; i < 11; i++) {
      profiles.push({
        name: `name${i}`,
        UserId: i,
        PictureId: i % 4,
        ProfileLocationId: i,
        TalentsId: i,
        FavoriteThingsId: i,
        email: `email@${i}.com`
        age: i + 5,
        gender: "Unicorn",
        maritalStatus: Boolean(i % 2),
        kids: i,
        aboutMe: "lorem ipsum spelling is awesome",
        whyMsgMe: "See above"
      });
    }
    return queryInterface.bulkInsert("Profiles", profiles);
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bukDelete(
      "Profiles",
      null,
      {},
      Sequelize.models.Profile
    );
  }
};
