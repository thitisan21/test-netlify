const express = require('express');
const router = express.Router();
const controllerGetRefID = require('../controllers/controllerGetRefID');

//getData
router.get('/', controllerGetRefID.getRef_id)
router.get('/test', (req, res) => res.send('GG'));

router.use(`*`, (req, res) => res.status(404).end());
module.exports = router;