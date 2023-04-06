import axios from "axios";
import {
  FILTER,
  ORDER,
  GET_CHARACTER_DETAIL,
  CLEAN_DETAIL,
  GET_FAVORITES,
} from "./action-types";

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
  return async function (dispatch) {
    const URL_BASE = "http://localhost:3001/rickandmorty";
    const response = await axios.get(`${URL_BASE}/detail/${id}`);
    dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data });
  };
};

export const getFavorites = () => {
  return async function (dispatch) {
    const URL_BASE = "http://localhost:3001/rickandmorty";
    try {
      const response = await axios.get(`${URL_BASE}/fav`);
      dispatch({ type: GET_FAVORITES, payload: response.data });
    } catch (error) {
      // Si la solicitud falla con un error 400, es probable que la base de datos esté vacía
      if (error.response && error.response.status === 400) {
        dispatch({ type: GET_FAVORITES, payload: [] });
      } else {
        // En otros casos, lanzar el error para manejarlo en el componente
        throw error;
      }
    }
  };
};
export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};
