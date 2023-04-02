const axios = require("axios");
const { KEY, URL } = process.env;

const getCharByIdController = async (id) => {
  return await axios(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(new Error("Personaje no encontrado"));
    });
};

module.exports = getCharByIdController;
