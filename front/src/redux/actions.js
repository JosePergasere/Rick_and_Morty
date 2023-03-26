import { ADD_FAV, DELETE_FAV, FILTER, ORDER } from "./action-types";

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
