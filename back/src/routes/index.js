const { Router } = require("express");
const router = Router();
const onsearchRouter = require("./onsearchRoute");
const detailRouter = require("./detailRoute");
const favRouter = require("./favRoute");

// ******************* Rutas ********************* //
router.use("/onsearch", onsearchRouter);

router.use("/detail", detailRouter);

router.use("/fav", favRouter);

// http://localhost/

module.exports = router;
