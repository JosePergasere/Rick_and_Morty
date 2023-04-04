const { Router } = require("express");
const {
  favPostController,
  favDeleteController,
  favGetController,
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
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

favRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  try {
    const favDelete = favDeleteController(id);
    res.status(200).json({
      Status: `Personaje con id: ${id} borrado con exito`,
      favDelete,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

favRouter.get("/", (req, res) => {
  try {
    const allFavs = favGetController();
    res.status(200).json(allFavs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = favRouter;
