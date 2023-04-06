import { useDispatch, useSelector } from "react-redux";
import style from "./Favorites.module.css";
import { filterCards, orderCards, getFavorites } from "../../redux/actions";
import { useEffect } from "react";
import Card from "../Card/Card";
const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };
  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <div>
      <div>
        <select
          className={style.DivButtons}
          name="orderCards"
          onChange={handlerOrder}
        >
          <option value="order" disabled="disabled">
            Order By
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select
          className={style.DivButtons}
          name="filterCards"
          onChange={handlerFilter}
        >
          <option value="filter" disabled="disabled">
            Filter By
          </option>
          <option value="All characters">All characters</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="Unknown">unknown</option>
        </select>
      </div>
      <div className={style.divFav}>
        {myFavorites.map(({ id, name, species, gender, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
            />
          );
        })}
        {/* {myFavorites.map((character) => {
          return (
            <div className={style.DivCard} key={character.id}>
              <Link to={`/detail/${character.id}`}>
                <h2>{character.name}</h2>
              </Link>
              <img className={style.img} src={character.image} alt="" />
              <div className={style.TextDiv}>
                <h2>{character.species}</h2>
                <h2>{character.gender}</h2>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Favorites;
