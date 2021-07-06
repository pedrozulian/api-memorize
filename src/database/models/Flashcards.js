const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize();

class Flashcards extends Model {}

Flashcards.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    one_day: {
        type: DataTypes.BOOLEAN
    },
    seven_days: {
        type: DataTypes.BOOLEAN
    },
    thirty_days: {
        type: DataTypes.BOOLEAN
    }
}, {
    sequelize,
    modelName: 'flashcards'
});