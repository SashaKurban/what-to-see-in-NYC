// "use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init(
    {
        username: {type: DataTypes.STRING},
        bio: {type: DataTypes.STRING},
        email: {
            type: DataTypes.STRING,
            validate: {
              isEmail: true,
            },
            unique: true,
            allowNull: false,
        },
        passwordHash: { type: DataTypes.STRING },
        password: {
          type: DataTypes.VIRTUAL,
          validate: {
            isLongEnough: (val) => {
              if (val.length < 7) {
                throw new Error("Please choose a longer password");
              }
            }
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
    // models.User.belongsTo(models.Category);
    // models.User.belongsToMany(models.Event, { through: "UserEvents" });
  };

  User.beforeSave((user, options) => {
    if (user.password) {
      user.passwordHash = bcrypt.hashSync(user.password, 10);
    }
  });

  return User;
};
