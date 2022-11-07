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
  };

  return Category;
};
