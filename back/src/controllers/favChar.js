let baseDeDatos = require("../utils/favServer");

const favPostController = (favorito) => {
  const comprobar = baseDeDatos.find((char) => char.id === favorito.id);
  if (!comprobar) {
    // Lo agrego a la base de datos el personaje traido
    baseDeDatos.push(favorito);
    // Envio un mensaje al usuario de que fue agregado correctamente
    return favorito;
  } else {
    throw new Error(`Personaje con id ${favorito.id} ya existente en el array`);
  }
};

const favGetController = () => {
  if (baseDeDatos.length) {
    return baseDeDatos;
  } else {
    throw new Error("Lista de favoritos vacia");
  }
};

const favDeleteController = (id) => {
  //Buscamos el índice del personaje que queremos eliminar en el arreglo fav
  baseDeDatos = baseDeDatos.filter((char) => char.id != id);
  return baseDeDatos;
  // const index = baseDeDatos.findIndex((char) => char.id === Number(id));
  // console.log(id);
  // if (index !== -1) {
  //   // Si encontramos el personaje, lo eliminamos del arreglo BaseDeDatos
  //   baseDeDatos.splice(index, 1);
  //   return baseDeDatos;
  // } else {
  //   // Si no encontramos el personaje, devolvemos un mensaje de error
  //   throw new Error(`No se encontró el personaje con id: ${id}.`);
  // }
};

module.exports = { favPostController, favGetController, favDeleteController };
