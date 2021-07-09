'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('items_folder_list_flashcards', {
      id_folder: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'folder_list_flashcards', key: 'id' }
      },
      id_list: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'list_flashcards', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('items_folder_list_flashcards');
  }
};