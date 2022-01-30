const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const filmsRoute = require('./routes/films');
const bookmarkRoute = require('./routes/bookmark');
const cors = require('cors');

app.use(cors());
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('db succesfull'))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/films', filmsRoute);
app.use('/api/bookmark', bookmarkRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log('backend is running');
});
