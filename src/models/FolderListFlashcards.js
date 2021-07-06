'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FolderListFlashcards extends Model {
    static associate(models) {}
  };
  FolderListFlashcards.init({
    id_user: {
      type: DataTypes.INTEGER,
      references: { model: 'users', key: 'id' }
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'folder_list_flashcards',
  });
  return FolderListFlashcards;
};