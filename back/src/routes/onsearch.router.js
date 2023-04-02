const { Router } = require("express");
const getCharByIdController = require("../controllers/getCharById");

const onsearchRouter = Router();

onsearchRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const character = await getCharByIdController(id);
    res.status(200).json(character);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = onsearchRouter;
