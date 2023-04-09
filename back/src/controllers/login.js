const { User } = require("../DB_connection");

const login = async ({ email, password }) => {
  // Busco en la DB un usuario en la base de datos que tenga el mismo email que se recibi
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error("Usuario no encontrado");
  } else if (user.password !== password) {
    throw new Error("Contraseña incorrecta");
  } else {
    return { access: true };
  }
};

module.exports = login;
