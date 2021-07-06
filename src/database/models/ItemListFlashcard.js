const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize();

class ItemListFlashcard extends Model {}

ItemListFlashcard.init({
    id_list: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'list_flashcards', key: 'id' }
    },
    id_flashcard: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'flashcards', key: 'id' }
    }
}, {
    sequelize,
    modelName: 'items_list_flashcards'
});