'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemsListFlashcards extends Model {
    static associate(models) {}
  };
  ItemsListFlashcards.init({
    id_list: {
      type: DataTypes.INTEGER,
      references: { model: 'list_flashcards', key: 'id' }
    },
    id_flashcard: {
      type: DataTypes.INTEGER,
      references: { model: 'flashcards', key: 'id' }
    }
  }, {
    sequelize,
    modelName: 'items_list_flashcards',
  });
  return ItemsListFlashcards;
};