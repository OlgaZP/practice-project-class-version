const { Router } = require('express');

const transactionController = require('./../controllers/transactionController');
const checkToken = require('./../middlewares/checkToken');
const basicMiddlewares = require('./../middlewares/basicMiddlewares');

const transactionRouter = Router();

transactionRouter.get(
  '/',
  checkToken.checkToken,
  //   basicMiddlewares.parseBody,
  transactionController.getTransactions
);

module.exports = transactionRouter;
