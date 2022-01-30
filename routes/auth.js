const router = require('express').Router();
const cryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const user = require('../models/User');

// register
router.post('/register', async (req, res) => {
  const newUser = new user({
    username: req.body.username,
    email: req.body.email,
    password: cryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
// login
router.post('/login', async (req, res) => {
  try {
    const User = await user.findOne({ username: req.body.username });
    !User && res.status(401).json('Username Tidak Ada');
    const hashedPassword = cryptoJS.AES.decrypt(
      User.password,
      process.env.SECRET_KEY
    );
    const passwordOriginal = hashedPassword.toString(cryptoJS.enc.Utf8);
    passwordOriginal !== req.body.password &&
      res.status(401).json('Username Tidak Ada');
    const accessToken = jwt.sign(
      {
        id: User._id,
        isAdmin: User.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '3d' }
    );
    const { password, ...others } = User._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
