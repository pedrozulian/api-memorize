const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize();

class ItemFolderListFlashcard extends Model {}

ItemFolderListFlashcard.init({
    id_folder: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'folder_list_flashcards', key: 'id' }
    },
    id_list: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'list_flashcards', key: 'id' }
    }
}, {
    sequelize,
    modelName: 'items_folder_list_flashcards'
});