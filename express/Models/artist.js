const mongoose = require('mongoose');

const artistSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    bio: { type: String, required: true },
    albums: { type: Array, required: false }
  },
  { collection: "artists" },
  { versionKey: false }
);

module.exports = mongoose.model('Artist', artistSchema);