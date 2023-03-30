const { KEY, URL } = process.env;
const axios = require("axios");

const getCharDetailController = (req, res) => {
  const { detailId } = req.params;
  axios(`${URL}/character/${detailId}?key=${KEY}`)
    .then((response) => {
      const { id, name, gender, species, origin, status } = response.data;
      res.status(200).json({ id, name, gender, species, status, origin });
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
};

module.exports = getCharDetailController;
