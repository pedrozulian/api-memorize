'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('items_list_flashcards', {
      id_list: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'list_flashcards', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_flashcard: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'flashcards', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('items_list_flashcards');
  }
};
