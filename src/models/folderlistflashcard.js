'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FolderListFlashcard extends Model {
    static associate(models) {
      FolderListFlashcard.belongsTo(models.User);
    }
  };
  FolderListFlashcard.init({
    id_user: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FolderListFlashcard',
  });
  return FolderListFlashcard;
};