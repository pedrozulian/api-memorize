'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemsFolderListFlashcards extends Model {
    static associate(models) {}
  };
  ItemsFolderListFlashcards.init({
    id_folder: {
      type: DataTypes.INTEGER,
      references: { model: 'folder_list_flashcards', key: 'id' }
    },
    id_list: {
      type: DataTypes.INTEGER,
      references: { model: 'list_flashcards', key: 'id' }
    }
  }, {
    sequelize,
    modelName: 'items_folder_list_flashcards',
  });
  return ItemsFolderListFlashcards;
};