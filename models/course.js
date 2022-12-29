"use strict";
const { number } = require("joi");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.belongsTo(models.User);
      models.User.hasMany(Course);
    }
  }
  Course.init(
    {
      meta: {
        type: DataTypes.TEXT,
      },

      userId: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      organizationName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      aboutOrganization: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      scope: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      requirement: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      target: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      lang: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Course",
    }
  );
  return Course;
};
