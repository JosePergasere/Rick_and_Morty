const { Router } = require("express");
const getCharByIdController = require("../controllers/getCharById");

const onsearchRouter = Router();

onsearchRouter.get("/:id", getCharByIdController);

module.exports = onsearchRouter;
