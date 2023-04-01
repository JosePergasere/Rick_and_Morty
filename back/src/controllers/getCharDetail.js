const { KEY, URL } = process.env;
const axios = require("axios");

const getCharDetailController = async (id) => {
  try {
    const response = await axios(`${URL}/character/${id}?key=${KEY}`);
    return response.data;
  } catch (error) {
    throw new Error("No se pudo obtener los detalles");
  }
};

module.exports = getCharDetailController;
