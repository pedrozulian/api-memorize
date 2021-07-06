const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize();

class FolderListFlashcards extends Model {}

FolderListFlashcards.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'folder_list_flashcards'
});