const { Router } = require("express");
const getCharDetailController = require("../controllers/getCharDetail");

const detailRouter = Router();

detailRouter.get("/:detailId", getCharDetailController);

module.exports = detailRouter;
