'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flashcards extends Model {
    static associate(models) {}
  };
  Flashcards.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    one_day: DataTypes.BOOLEAN,
    seven_days: DataTypes.BOOLEAN,
    thirty_days: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Flashcards',
  });
  return Flashcards;
};