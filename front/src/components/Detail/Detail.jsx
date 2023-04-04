import style from "./Detail.module.css";
import useCharacter from "../../hooks/useCharacter";

const Detail = () => {
  const character = useCharacter();
  return (
    <div className={style.containerDetail}>
      {character.name ? (
        <>
          <div className={style.textDetail}>
            <h2>Name: {character.name}</h2>
            <img src={character.image} className={style.imgDetail} alt="img" />
            <p>Status: {character.status}</p>
            <p>Specie: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin?.name}</p>
          </div>
        </>
      ) : (
        <h3 className={style.Loading}>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;
