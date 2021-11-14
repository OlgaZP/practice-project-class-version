const db = require('../models');
const ServerError = require('../errors/ServerError');

module.exports.getTransactions = async (req, res, next) => {
  const {
    // query: { limit, offset, status },
    tokenData: { userId },
  } = req;
  try {
    const transactions = await db.Transactions.findAll({
      where: { userId },
      raw: true,
      attributes: { exclude: ['updatedAt', 'userId'] },
      // limit,
      // offset: offset === 'undefined' ? 0 : offset,
      order: [['id', 'DESC']],
    });
    res.status(200).send(transactions);
  } catch (err) {
    next(new ServerError());
  }
};
