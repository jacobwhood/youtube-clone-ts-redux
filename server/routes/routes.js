const express = require('express');
const router = express.Router();
const videoRoutes = require('./videos.js');

router.use('/videos', videoRoutes);

module.exports = router;
