const { User } = require("../DB_connection");

const postUser = async ({ email, password }) => {
  // Verificar si el usuario ya existe en la base de datos
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error("Ya existe un usuario con este correo electrónico");
  }

  // Crear el usuario si no existe
  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: { password },
  });

  return user;
};

module.exports = postUser;
