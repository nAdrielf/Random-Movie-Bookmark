const routerFilms = require('express').Router();
const {
  verifyToken,
  verifyTokennAuth,
  verifyTokennAdmin,
} = require('./verifyToken');
const cryptoJs = require('crypto-js');
const Films = require('../models/Films');

// create
routerFilms.post('/', verifyTokennAdmin, async (req, res) => {
  const newFilm = new Films(req.body);
  try {
    const savedFilm = await newFilm.save();
    res.status(200).json(savedFilm);
  } catch (err) {
    res.status(500).json(err);
  }
});
// update
routerFilms.put('/:id', verifyTokennAdmin, async (req, res) => {
  try {
    const updateFilm = await Films.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateFilm);
  } catch (err) {
    res.status(500).json(err);
  }
});
// delete
routerFilms.delete('/:id', verifyTokennAdmin, async (req, res) => {
  try {
    await Films.findByIdAndDelete(req.params.id);
    res.status(200).json('Film has been deleted');
  } catch (err) {
    res.status(500).json(err);
  }
});
// get film by id
routerFilms.get('/find/:id', async (req, res) => {
  try {
    const film = await Films.findById(req.params.id);
    res.status(200).json(film);
  } catch (err) {
    res.status(500).json(err);
  }
});
// get all films
routerFilms.get('/', async (req, res) => {
  const qNew = req.query.new;
  const qGenre = req.query.genre;
  try {
    let films;
    if (qNew) {
      films = await Films.find().sort({ createdAt: -1 }).limit(5);
    } else if (qGenre) {
      films = await Films.find({
        genre: {
          $in: [qGenre],
        },
      });
    } else {
      films = await Films.find();
    }
    res.status(200).json(films);
  } catch (err) {
    res.status(500).json(err);
  }
});
// get user stats

module.exports = routerFilms;
