"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {}

  Event.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: { isDate: true },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { 
            
         },
      },
      link: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: { 
            isUrl: true,
         },
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: { 
            min: 0,
         },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { 
            len: [3, 250],
            notEmpty: true,
         },
      },
    },
    {
      sequelize,
      modelName: "Event",
    }
  );

  Event.associate = (models) => {
    // associations can be defined here
  };

  return Event;
};
