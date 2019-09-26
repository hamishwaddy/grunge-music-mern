const jwt = require('jsonwebtoken');
const JWT_KEY = require('../config/keys');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    const decoded = jwt.verify(token, JWT_KEY.JWT_KEY);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Authorisation failed'
    })
  }
}