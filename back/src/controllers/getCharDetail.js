const { KEY, URL } = process.env;
const axios = require("axios");

const getCharDetailController = async (id) => {
  return await axios(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(new Error("No se pudo obtener los detalles"));
    });
};

module.exports = getCharDetailController;
