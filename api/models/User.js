"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init(
    {
        username: {
            type: DataTypes.STRING,
            validate: {
              len: [3, 250],
              notEmpty: true,
            },
            unique: true,
          },
        bio: {
            type: DataTypes.STRING,
            validate: {
              len: [3, 250],
              notEmpty: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
              len: [3, 250],
              notEmpty: true,
              isEmail: true,
            },
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            validate: {
              len: [3, 250],
              notEmpty: true,
            }
        },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.associate = (models) => {
    // associations can be defined here
    models.User.belongsTo(models.Category);
    models.User.belongsToMany(models.Event, { through: "UserEvents" });
  };

  return User;
};
