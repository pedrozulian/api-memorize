'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('flashcards', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      question: {
          type: Sequelize.STRING,
          allowNull: false
      },
      answer: {
          type: Sequelize.STRING,
          allowNull: false
      },
      one_day: {
          type: Sequelize.BOOLEAN
      },
      seven_days: {
          type: Sequelize.BOOLEAN
      },
      thirty_days: {
          type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('flashcards');
  }
};
