const axios = require("axios");
const { KEY, URL } = process.env;

const successH = (response, res) => {
  const { id, name, image, gender, species, origin, status } = response.data;
  res
    .writeHead(200, { "Content-Type": "application/json" })
    .end(JSON.stringify({ id, name, image, gender, species, origin, status }));
};

const errorH = (err, res) => {
  res
    .writeHead(500, { "Content-Type": "text/plain" })
    .end(JSON.stringify(err.message));
};

const getChardDetail = (res, id) => {
  axios
    .get(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => successH(response, res))
    .catch((err) => errorH(err, res));
};

module.exports = getChardDetail;
