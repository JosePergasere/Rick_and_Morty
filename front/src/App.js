import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { username, password } from "./components/keys/keys";

function App() {
  // ! HOOKS
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  //! Se encarga de realizar una solicitud HTTP a la API para buscar un personaje por  su ID
  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001";

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/rickandmorty/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          //setCharacters([...characters,data]);
        } else {
          alert("No se ha encontrado este ID");
        }
      });
  };

  /*************************************************************************************************************** */
  //! Funcion que se encarga de eliminar al personaje con ese ID
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  //! Funcion que se encarga de ver si los datos ingresados son correctos para el login
  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  //!! RENDERRRRRRRRRRRRRRRR
  return (
    <div className="App">
      {pathname !== "/" && <Nav className="Nav" onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
