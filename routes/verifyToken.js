const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) res.status(403).json('TOken tidak valid');
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json('You are not authenticated!');
  }
};
const verifyTokennAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('you are not allowed');
    }
  });
};
const verifyTokennAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('you are not allowed');
    }
  });
};
module.exports = { verifyToken, verifyTokennAuth, verifyTokennAdmin };
