const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const FilmsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
      required: true,
    },
    genre: {
      type: Array,
      required: true,
    },
    crew: {
      type: Array,
      required: true,
    },
    runtime: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.models.Films || mongoose.model('Films', FilmsSchema);
