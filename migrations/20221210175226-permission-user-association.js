"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint("Users", {
      fields: ["permissionId"],
      type: "foreign key",
      name: "permission_user_constraint",
      references: {
        table: "Permissions",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint("Users", {
      fields: ["permissionId"],
      type: "foreign key",
      name: "permission_user_constraint",
      references: {
        table: "Permissions",
        field: "id",
      },
    });
  },
};
