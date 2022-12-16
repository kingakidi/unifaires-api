"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint("CourseLandings", {
      fields: ["userId"],
      type: "foreign key",
      name: "course-landing-users",
      references: {
        table: "Users",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint("CourseLandings", {
      fields: ["userId"],
      type: "foreign key",
      name: "course-landing-users",
      references: {
        table: "Users",
        field: "id",
      },
    });
  },
};
