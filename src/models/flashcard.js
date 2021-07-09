'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flashcard extends Model {
    static associate(models) {
      Flashcard.hasMany(models.ItemListFlashcard, { foreignKey: 'id_flashcard' });
    }
  };
  Flashcard.init({
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    one_day: DataTypes.BOOLEAN,
    seven_days: DataTypes.BOOLEAN,
    thirty_days: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Flashcard',
  });
  return Flashcard;
};