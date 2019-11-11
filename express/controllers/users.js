const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const JWT_KEY = require('../config/keys');

exports.users_signup = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(422).json({
          message: 'Email already exists'
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              name: req.body.name,
              email: req.body.email,
              password: hash,
              isAdmin: false
            });
            user
              .save()
              .then(result => {
                console.log(result)
                res.status(200).json({
                  message: 'User created',
                  result: result
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
}

exports.users_login = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: 'Authorisation failed'
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Authorisation failed'
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              name: user[0].name,
              email: user[0].email,
              userId: user[0]._id
            },
            JWT_KEY.JWT_KEY,
            {
              expiresIn: "1h"
            }
          );
          console.log(result);
          return res.status(200).json({
            message: 'Authorisation successful',
            token: token
          });
        }
        res.status(401).json({
          message: 'Authorisation failed'
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    })
}

exports.users_delete = (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'User deleted'
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    })
}

exports.users_get_all = (req, res, next) => {
  User.find()
    .select('name password')
    // .populate('artist', 'name bio')
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        user: docs.map(doc => {
          return {
            _id: doc._id,
            name: doc.name,
            password: doc.password,
            request: {
              type: 'GET',
              url: 'http://localhost:3000/user/' + doc._id
            }
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    })
}

exports.users_get_user = (req, res, next) => {
  const id = req.params.userId;
  User.findById(id)
    .select('name email password isAdmin')
    // .populate('artist', 'name bio')
    .exec()
    .then(doc => {
      console.log(doc);
      if (doc) {
        res.status(200).json({
          user: doc,
          request: {
            type: 'GET',
            url: 'http://localhost:3000/users'
          }
        });
      } else {
        res.status(404).json({ message: 'Not a valid user ID' })
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    })
}