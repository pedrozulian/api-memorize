'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemListFlashcard extends Model {
    static associate(models) {
      ItemListFlashcard.belongsTo(models.ListFlashcard);
      ItemListFlashcard.belongsTo(models.Flashcard);
    }
  };
  ItemListFlashcard.init({
    id_list: DataTypes.INTEGER,
    id_flashcard: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemListFlashcard',
  });
  return ItemListFlashcard;
};