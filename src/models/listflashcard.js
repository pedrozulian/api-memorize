'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListFlashcard extends Model {
    static associate(models) {
      ListFlashcard.belongsTo(models.User);
      ListFlashcard.hasMany(models.ItemListFlashcard, { foreignKey: 'id_list' });
    }
  };
  ListFlashcard.init({
    id_user: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ListFlashcard',
  });
  return ListFlashcard;
};