import style from "./Detail.module.css";
import useCharacter from "../../hooks/useCharacter";

const Detail = () => {
  const character = useCharacter();
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
