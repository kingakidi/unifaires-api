"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Courses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      meta: {
        type: Sequelize.TEXT,
      },

      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      organizationName: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      aboutOrganization: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      scope: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      requirement: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      target: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      lang: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Courses");
  },
};
