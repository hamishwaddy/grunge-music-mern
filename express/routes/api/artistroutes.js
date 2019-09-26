const express = require('express');
const router = express.Router();
const checkAuth = require('../../middleware/auth');

const ArtistsController = require('../../controllers/artists');

router.get('/', ArtistsController.artists_get_all);

router.post('/', checkAuth, ArtistsController.artists_create_artist);

router.get('/:artistId', ArtistsController.artists_get_artist);

router.patch('/:artistId', checkAuth, ArtistsController.artists_update_artist);

router.delete('/:artistId', checkAuth, ArtistsController.artists_delete_artist);

module.exports = router;