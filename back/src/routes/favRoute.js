const { Router } = require("express");
const {
  favPostController,
  favGetController,
  favDeleteController,
} = require("../controllers/favChar");

const favRouter = Router();

favRouter.post("/", async (req, res) => {
  const favorito = req.body;
  try {
    const favoritoPost = await favPostController(favorito);
    res.status(200).json({
      status: "OK Personaje Posteado con exito",
      favoritoPost,
    });
  } catch (error) {}
});

favRouter.get("/", favGetController);

favRouter.delete("/:id", favDeleteController);

module.exports = favRouter;
