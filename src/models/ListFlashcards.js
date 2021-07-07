'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListFlashcards extends Model {
    static associate(models) {}
  };
  ListFlashcards.init({
    id_user: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'users', key: 'id' }
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'list_flashcards',
  });
  return ListFlashcards;
};