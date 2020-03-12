const key = require('../config/keys');
const stripe = require('stripe')(key.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      source: req.body.id,
      description: req.body.email
    });
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
