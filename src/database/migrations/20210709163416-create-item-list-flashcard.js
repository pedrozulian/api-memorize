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
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('items_list_flashcards');
  }
};