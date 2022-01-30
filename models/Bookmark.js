const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const BookmarkSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    films: [
      {
        filmsId: {
          type: String,
        },
        title: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);
module.exports =
  mongoose.models.Bookmark || mongoose.model('Bookmark', BookmarkSchema);
