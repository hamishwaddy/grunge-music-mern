const mongoose = require('mongoose');

const Artist = require('../models/artist');

const albumSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    artist: { type: Object, required: true },
    releaseYear: { type: Number, required: true },
    recordLabel: { type: String, required: true },
    albumArt: { type: String, required: true }
  },
  { collection: "albums" },
  { versionKey: false }
);

module.exports = mongoose.model('Album', albumSchema);