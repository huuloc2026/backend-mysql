"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Station.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 30],
        },
      },
      address: { type: DataTypes.STRING },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [["Hồ Chí Minh", "Hà Nội", "An Giang"]],
        },
      },
    },
    {
      sequelize,
      modelName: "Station",
    }
  );
  return Station;
};
