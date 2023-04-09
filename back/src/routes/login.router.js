const { Router } = require("express");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const loginRouter = Router();

//* ------------------------------------------------------------------------------------------*//

loginRouter.get("/", async (req, res) => {
  const { email, password } = req.body;
  //Verifico que ambos existan
  if (!email || !password) {
    return res.status(400).json({ message: "Faltan datos" });
  }
  try {
    const userAccess = await login({ email, password });
    return res.status(200).json({ access: true });
  } catch (error) {
    switch (error.message) {
      case "Usuario no encontrado":
        return res.status(404).json({ error: error.message });

      case "Contraseña incorrecta":
        return res.status(403).json({ error: error.message });

      default:
        return res.status(500).json({ message: error.message });
    }
  }
});

//*  ------------------------------------------------------------------------------ *//

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body;
  // Valido que se hayan recibido email y password correctamente
  if (!email || !password) {
    return res.status(400).json({ message: "Faltan datos" });
  }
  try {
    const userPost = await postUser({ email, password });
    return res
      .status(200)
      .json(`El usuario con el mail: ${email} fue posteado con exito`);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = loginRouter;
