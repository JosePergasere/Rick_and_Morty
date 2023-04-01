const axios = require("axios");
const { KEY, URL } = process.env;

const getCharByIdController = async (id) => {
  try {
    const response = await axios(`${URL}/character/${id}?key=${KEY}`);
    return response.data;
  } catch (error) {
    throw new Error("Personaje no encontrado");
  }
};

module.exports = getCharByIdController;
