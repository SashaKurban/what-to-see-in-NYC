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
  
  //uncomment when connection between categories and events / users is implemented
  Category.associate = (models) => {
    // associations can be defined here
    models.Category.belongsToMany(models.Event, { through: "CategoryEvents" });
    // models.Category.belongsToMany(models.User, { through: "CategoryUsers" });
  };

  return Category;
};
