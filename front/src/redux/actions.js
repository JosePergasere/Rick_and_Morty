import {
  ADD_FAV,
  DELETE_FAV,
  FILTER,
  ORDER,
  GET_CHARACTER_DETAIL,
  CLEAN_DETAIL,
} from "./action-types";

//! Crea la accion add_fav
export const add_fav = (character) => {
  return {
    type: ADD_FAV,
    payload: character,
  };
};

//! Crea la accion delete_fav
export const delete_fav = (id) => {
  return {
    type: DELETE_FAV,
    payload: id,
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  };
};

export const getCharacterDetail = (id) => {
  return function (dispatch) {
    const URL_BASE = "http://localhost:3001";
    fetch(`${URL_BASE}/detail/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_CHARACTER_DETAIL, payload: data }));
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};
