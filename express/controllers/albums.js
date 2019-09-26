const mongoose = require('mongoose');

const Album = require('../models/album');

exports.albums_get_all = (req, res, next) => {
  Album.find()
    .select('title artist releaseYear recordLabel _id albumArt')
    // .populate('artist', 'name bio')
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        albums: docs.map(doc => {
          return {
            _id: doc._id,
            title: doc.title,
            artist: doc.artist,
            releaseYear: doc.releaseYear,
            recordLabel: doc.recordLabel,
            albumArt: doc.albumArt,
            request: {
              type: 'GET',
              url: 'http://localhost:3000/albums/' + doc._id
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

exports.albums_create_album = (req, res, next) => {
  console.log(req.file);
  const album = new Album({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    artist: req.body.artist,
    releaseYear: req.body.releaseYear,
    recordLabel: req.body.recordLabel,
    albumArt: req.file.path,
  });
  album
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: 'Successfully created album',
        createdAlbum: {
          title: result.title,
          artist: result.artist,
          releaseYear: result.releaseYear,
          recordLabel: result.recordLabel,
          albumArt: result.albumArt,
          _id: result._id,
          request: {
            type: 'GET',
            url: 'http://localhost:3000/albums/' + result._id
          }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

exports.albums_get_album = (req, res, next) => {
  const id = req.params.albumId;
  Album.findById(id)
    .select('title artist releaseYear recordLabel albumArt')
    // .populate('artist', 'name bio')
    .exec()
    .then(doc => {
      console.log(doc);
      if (doc) {
        res.status(200).json({
          album: doc,
          request: {
            type: 'GET',
            url: 'http://localhost:3000/albums'
          }
        });
      } else {
        res.status(404).json({ message: 'Not a valid album ID' })
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    })
}

exports.albums_update_album = (req, res, next) => {
  const id = req.params.albumId;
  // Update only the props you want, not necessarily all props
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Album.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: 'Album updated',
        request: {
          type: 'GET',
          url: 'http://localhost:3000/albums/' + id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

exports.albums_delete_album = (req, res, next) => {
  const id = req.params.albumId;
  Album.deleteOne({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'Album deleted',
        request: {
          type: 'POST',
          url: 'http:localhost:3000/albums',
          body: {
            title: 'String',
            artist: 'String',
            releaseYear: 'Number',
            recordLabel: 'String'
          }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}