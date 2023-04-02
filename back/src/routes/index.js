const { Router } = require("express");
const router = Router();
const onsearchRouter = require("./onsearch.router");
const detailRouter = require("./detail.router");
const favRouter = require("./favs.router");

// ******************* Rutas ********************* //
router.use("/onsearch", onsearchRouter);

router.use("/detail", detailRouter);

router.use("/fav", favRouter);

// http://localhost/

module.exports = router;
