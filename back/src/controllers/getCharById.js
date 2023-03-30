const axios = require("axios");
const { KEY, URL } = process.env;

const getCharByIdController = (req, res) => {
  const { id } = req.params;
  console.log(id);
  axios(`${URL}/character/${id}?key=${KEY}`).then(
    (response) => {
      const { id, name, gender, species, image } = response.data;
      res.status(200).json({ id, name, gender, species, image });
    },
    (error) => res.status(500).json(error.message)
  );
};

module.exports = getCharByIdController;
