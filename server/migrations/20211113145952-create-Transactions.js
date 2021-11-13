'use strict';
const { TRANSACTION_OPERATION_TYPES } = require('../constants');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('Transactions', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        transactionType: {
          type: Sequelize.ENUM(
            TRANSACTION_OPERATION_TYPES.INCOME,
            TRANSACTION_OPERATION_TYPES.OUTCOME
          ),
          allowNull: false,
        },
        amount: {
          type: Sequelize.DECIMAL,
        },
        userId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id',
          },
          onUpdate: 'cascade',
          onDelete: 'restrict',
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(() => {
        queryInterface.addConstraint('Transactions', {
          type: 'check',
          fields: ['amount'],
          where: { amount: { [Sequelize.Op.gte]: 0 } },
        });
      });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  },
};
