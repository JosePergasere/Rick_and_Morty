const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;

  try {
    // Elimino el favorito con el id indicado
    await Favorite.destroy({ where: { id } });

    // Busco todos los personajes favoritos y responder con un arreglo
    const allFavs = await Favorite.findAll();
    res.json(allFavs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { deleteFav };
