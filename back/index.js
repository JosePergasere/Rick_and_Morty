require("dotenv").config();
const server = require("./src/server");
const { database } = require("./src/DB_connection");
const PORT = process.env.PORT || 3001;

database
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
