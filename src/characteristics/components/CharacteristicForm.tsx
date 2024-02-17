"use client";

import { FormEvent } from "react";
import style from "../styles/CharacteristicForm.module.css";

const CharacteristicForm = () => {
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={style.container}>
      <form onSubmit={onSubmit} className={style.form}>
        <input
          type="text"
          id="name"
          className={style.input}
          placeholder="Nombre"
        />
        <input
          type="text"
          id="description"
          className={`${style.input}`}
          placeholder="Descripción"
        />
        <button type="submit" className={style.button}>
          Crear
        </button>
      </form>
    </div>
  );
};

export default CharacteristicForm;
