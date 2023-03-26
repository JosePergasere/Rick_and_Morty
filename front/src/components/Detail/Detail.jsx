import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import style from "./Detail.module.css";
const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const URL_BASE = "http://localhost:3001/rickandmorty";
    axios(`${URL_BASE}/detail/${detailId}`).then((response) =>
      setCharacter(response.data)
    );
  }, []);

  return (
    <div className={style.containerDetail}>
      {character.name ? (
        <>
          <div className={style.textDetail}>
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.specie}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
          </div>
          <div>
            <img src={character.image} className={style.imgDetail} alt="img" />
          </div>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;
