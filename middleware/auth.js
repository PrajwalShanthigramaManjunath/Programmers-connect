const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  //getting token
  const token = req.header('x-auth-token');

  //if no token
  if (!token) {
    return res.status(401).json({ msg: 'Invalid authorization' });
  }

  //verifying token
  try {
    const decoded = jwt.verify(token, config.get('jwttoken'));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Invalid token' });
  }
};
