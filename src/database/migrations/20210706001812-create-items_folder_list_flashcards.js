'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('items_folder_list_flashcards', {
      id_folder: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'folder_list_flashcards', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_list: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'list_flashcards', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('items_folder_list_flashcards');
  }
};
