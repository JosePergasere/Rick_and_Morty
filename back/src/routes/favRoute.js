const { Router } = require("express");
const {
  favPostController,
  favGetController,
  favDeleteController,
} = require("../controllers/favChar");

const favRouter = Router();

favRouter.post("/", favPostController);

favRouter.get("/", favGetController);

favRouter.delete("/:id", favDeleteController);

module.exports = favRouter;
