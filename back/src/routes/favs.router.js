const { Router } = require("express");

const { postFav } = require("../controllers/postFav");
const { deleteFav } = require("../controllers/deleteFav");
const favRouter = Router();

favRouter.post("/", postFav);
favRouter.delete("/:id", deleteFav);

module.exports = favRouter;
