const express = require("express");
const router = express.Router();


const routeGetRefID = require("./routeGetRefID");
router.use('/api/getref_id', routeGetRefID);

module.exports = router;
