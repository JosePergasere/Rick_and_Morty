import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function ({ onSearch }) {
  return (
    <nav className={style.Nav}>
      <Link to="/home">
        <h3 className={style.h3}>HOME</h3>
      </Link>
      <Link to="/about">
        <h3 className={style.h3}>ABOUT</h3>
      </Link>
      <Link to="/favorites">
        <button className={style.buttonFav}>❤️ Favoritos ❤️</button>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
