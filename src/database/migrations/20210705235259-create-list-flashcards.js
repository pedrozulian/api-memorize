'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('list_flashcards', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      id_user: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
      },
      name: {
          type: Sequelize.STRING
      },
      created_at: {
          type: Sequelize.DATE,
          allowNull: false
      },
      updated_at: {
          type: Sequelize.DATE
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('list_flashcards');
  }
};
