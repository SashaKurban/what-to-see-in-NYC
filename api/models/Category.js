"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {}

  Category.init(
    {
        type: {
            type: DataTypes.STRING,
            validate: {
              len: [3, 250],
              notEmpty: true,
            },
            unique: true,
          },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );

  Category.associate = (models) => {
    // associations can be defined here
    models.Category.belongsToMany(models.Events, { through: "CategoryEvents" });
    models.Category.belongsToMany(models.Users, { through: "CategoryUsers" });
  };

  return Category;
};
