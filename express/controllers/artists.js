const mongoose = require('mongoose');

const Artist = require('../models/artist');

exports.artists_get_all = (req, res, next) => {
  Artist.find()
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    })
}

exports.artists_create_artist = (req, res, next) => {
  const artist = new Artist({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    bio: req.body.bio,
  });
  artist
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: 'Artist created',
        createdArtist: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

exports.artists_get_artist = (req, res, next) => {
  const id = req.params.artistId;
  Artist.findById(id)
    .exec()
    .then(doc => {
      console.log(doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({ message: 'Not a valid artist ID' })
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    })
}

exports.artists_update_artist = (req, res, next) => {
  const id = req.params.artistId;
  // Update only the props you want, not necessarily all props
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Artist.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json({ result });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

exports.artists_delete_artist = (req, res, next) => {
  const id = req.params.artistId;
  Artist.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'Artist deleted',
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