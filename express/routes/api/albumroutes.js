const express = require('express');
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../../middleware/auth');

const AlbumsController = require('../../controllers/albums');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + '-' + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.get('/', AlbumsController.albums_get_all);

router.post('/', checkAuth, upload.single('albumArt'), AlbumsController.albums_create_album);

router.get('/:albumId', AlbumsController.albums_get_album);

router.patch('/:albumId', checkAuth, AlbumsController.albums_update_album);

router.delete('/:albumId', checkAuth, AlbumsController.albums_delete_album);

module.exports = router;