const db = require('../models');
const ServerError = require('../errors/ServerError');

module.exports.getOffers = async (req, res, next) => {
  //   console.log(`in getOffersController`);
  try {
    const foundOffers = await db.Offers.findAll({
      raw: true,
      attributes: ['text', 'status'],
    });
    // console.log(`foundOffers >>`, foundOffers);
    if (foundOffers) {
      res.status(200).send(foundOffers);
    } else {
      res.status(404).send('Offers not found');
    }
  } catch (err) {
    next(new ServerError(err));
  }
};
