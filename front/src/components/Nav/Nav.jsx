import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function ({ onSearch }) {
  return (
    <nav className={style.Nav}>
      <Link to="/home">
        <h3 className={style.h3}>HOME</h3>
      </Link>
      <Link to="/favorites">
        <button className={style.buttonFav}>❤️ Favoritos ❤️</button>
      </Link>
      <Link to="/about">
        <h3 className={style.h3}>📜 ABOUT 📗</h3>
      </Link>
      <SearchBar onSearch={onSearch} />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"
        alt=""
        className={style.img}
      />
      <Link to="/">
        <h3 className={style.h3}> Logout </h3>
      </Link>
    </nav>
  );
}
