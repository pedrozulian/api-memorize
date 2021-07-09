'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemFolderListFlashcard extends Model {
    static associate(models) {
      ItemFolderListFlashcard.belongsTo(models.FolderListFlashcard);
      ItemFolderListFlashcard.belongsTo(models.ListFlashcard);
    }
  };
  ItemFolderListFlashcard.init({
    id_folder: DataTypes.INTEGER,
    id_list: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemFolderListFlashcard',
  });
  return ItemFolderListFlashcard;
};