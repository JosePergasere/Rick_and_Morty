import React from "react";
import style from "./Form.module.css";
import validation from "./validation.js";
import { useState } from "react";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation(
        {
          ...userData,
          [event.target.name]: event.target.value,
        },
        errors
      )
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <div>
        <label>Username: </label>
        <input
          className={style.input}
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          placeholder="Introduce su email"
        ></input>
        <p>{errors.username}</p>
      </div>

      <div>
        <label>Password: </label>
        <input
          className={style.input}
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          placeholder="Introduce su password"
        ></input>
        <p>{errors.password}</p>
      </div>

      <button className={style.button} type="submit">
        LOGIN
      </button>
    </form>
  );
};

export default Form;
