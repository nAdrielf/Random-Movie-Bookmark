const routerBookmark = require('express').Router();
const {
  verifyToken,
  verifyTokennAuth,
  verifyTokennAdmin,
} = require('./verifyToken');
const cryptoJs = require('crypto-js');
const Bookmark = require('../models/Bookmark');

// create
routerBookmark.post('/', verifyToken, async (req, res) => {
  const newBookmark = new Bookmark(req.body);
  try {
    const savedBookmark = await newBookmark.save();
    res.status(200).json(savedBookmark);
  } catch (err) {
    res.status(500).json(err);
  }
});
// update
routerBookmark.put('/:id', verifyTokennAuth, async (req, res) => {
  try {
    const updateBookmark = await Bookmark.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateBookmark);
  } catch (err) {
    res.status(500).json(err);
  }
});
// delete
routerBookmark.delete('/:id', verifyTokennAuth, async (req, res) => {
  try {
    await Bookmark.findByIdAndDelete(req.params.id);
    res.status(200).json('Bookmark has been deleted');
  } catch (err) {
    res.status(500).json(err);
  }
});
// get bookmarked film by user id
routerBookmark.get('/find/:userId', verifyTokennAuth, async (req, res) => {
  try {
    const bookmark = await Bookmark.findOne({ userId: req.params.userId });
    res.status(200).json(bookmark);
  } catch (err) {
    res.status(500).json(err);
  }
});
// // get all bookmark
routerBookmark.get('/', verifyTokennAdmin, async (req, res) => {
  try {
    const bookmarks = await Bookmark.find();
    res.status(200).json(bookmarks);
  } catch (err) {
    res.status(500).json(err);
  }
});
// // get user stats

module.exports = routerBookmark;
