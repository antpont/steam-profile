const router = require('express').Router();
const { steamID, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

    const steamID = await steamID.findAll({
      include: [
        {
          model: User,
          attributes: ['steamid'],
        },
      ],
    });





    res.render('homepage', {
      steamID,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});





router.get('/profile', withAuth, async (req, res) => {
  try {

    const userData = await User.findByPk(req.session.steam_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: steamID }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
