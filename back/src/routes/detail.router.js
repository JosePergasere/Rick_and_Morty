const { Router } = require("express");
const getCharDetailController = require("../controllers/getCharDetail");

const detailRouter = Router();

detailRouter.get("/:detailId", async (req, res) => {
  const { detailId } = req.params;
  try {
    const characterDetail = await getCharDetailController(detailId);
    res.status(200).json(characterDetail);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = detailRouter;
