"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint("Permissions", {
      fields: ["roleId"],
      type: "foreign key",
      name: "role_permission_constraint",
      references: {
        table: "Roles",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint("Permissions", {
      fields: ["roleId"],
      type: "foreign key",
      name: "role_permission_constraint",
      references: {
        table: "Roles",
        field: "id",
      },
    });
  },
};
