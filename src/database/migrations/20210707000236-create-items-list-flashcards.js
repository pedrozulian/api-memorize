'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('items_list_flashcards', {
      id_list: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'list_flashcards', key: 'id' }
      },
      id_flashcard: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'flashcards', key: 'id' }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('items_list_flashcards');
  }
};