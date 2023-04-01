const baseDeDatos = require("../utils/favServer");

const favPostController = (favorito) => {
  // Lo agrego a la base de datos el personaje traido
  baseDeDatos.push(favorito);
  // Envio un mensaje al usuario de que fue agregado correctamente
  return favorito;
};

const favGetController = (req, res) => {
  res.status(200).json(baseDeDatos);
};

const favDeleteController = (req, res) => {
  const { id } = req.params;

  //Buscamos el índice del personaje que queremos eliminar en el arreglo fav
  const index = baseDeDatos.findIndex((char) => char.id === Number(id));

  if (index !== -1) {
    // Si encontramos el personaje, lo eliminamos del arreglo BaseDeDatos
    baseDeDatos.splice(index, 1);
    res
      .status(200)
      .send(`El personaje con id ${id} fue eliminado correctamente.`);
  } else {
    // Si no encontramos el personaje, devolvemos un mensaje de error
    res.status(404).send(`No se encontró el personaje con id ${id}.`);
  }
};

module.exports = { favPostController, favGetController, favDeleteController };
