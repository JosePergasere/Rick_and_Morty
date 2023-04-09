const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;

  // Valido que se recibieron todos los datos requeridos
  if (!name || !origin || !status || !image || !species || !gender) {
    res.status(401).json({ message: "Faltan datos" });
    return;
  }

  try {
    // Crear un nuevo registro en la tabla "favorites"
    const newFav = await Favorite.create({
      name,
      origin,
      status,
      image,
      species,
      gender,
    });

    // Busco todos los personajes favoritos y responder con un arreglo
    const allFavs = await Favorite.findAll();
    res.json(allFavs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { postFav };
