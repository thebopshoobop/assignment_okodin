"use strict";
var cityVar = [
  "Kilmainham‎",
  "Arklow",
  "Brattahlíð",
  "Thurso",
  "Sarskoye_Gorodishche",
  "Longphort",
  "Munsö",
  "Old_Scatness",
  "Hovgården",
  "Skjálfandi"
];

module.exports = {
  up: function(queryInterface, Sequelize) {
    let cities = [];
    cityVar.forEach(i => {
      locations.push({
        name: i
      });
    });
    return queryInterface.bulkInsert("Cities", cities);
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bukDelete("Cities", null, {}, Sequelize.models.City);
  }
};
