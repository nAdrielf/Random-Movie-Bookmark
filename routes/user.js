const routerUser = require('express').Router();
const {
  verifyToken,
  verifyTokennAuth,
  verifyTokennAdmin,
} = require('./verifyToken');
const cryptoJs = require('crypto-js');
const User = require('../models/User');

// update
routerUser.put('/:id', verifyTokennAuth, async (req, res) => {
  if (req.body.password) {
    req.body.password = cryptoJs.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString();
  }
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
// delete
routerUser.delete('/:id', verifyTokennAuth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User has been deleted');
  } catch (err) {
    res.status(500).json(err);
  }
});
// get user by id
routerUser.get('/find/:id', verifyTokennAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});
// get all user
routerUser.get('/', verifyTokennAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});
// get user stats

module.exports = routerUser;
