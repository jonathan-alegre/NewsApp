import { useState, useEffect } from "react";
import "../styles/buscador.css";
import { useForm } from "../hooks/useForm.js";
import { SelectPaises } from "../components/SelectPaises.jsx";
import { NewsList } from "../components/NewsList.jsx";
export const BuscadorNoticias = () => {
  const initialForm = {
    fechaDesde: "",
    fechaHasta: "",
    palabrasClave: "",
  };

  const { formState, onInputChange } = useForm(initialForm);
  const { fechaDesde, fechaHasta, palabrasClave } = formState;

  return (
    <div className="container">
      <div className="d-flex flex-row-reverse">
        <SelectPaises></SelectPaises>
      </div>
      <hr />
      <form className="row g-3">
        <div className="col-sm-7">
          <input
            type="text"
            className="form-control"
            name="fechaDesde"
            placeholder="Fecha Desde"
            value={fechaDesde}
            onChange={onInputChange}
          />
        </div>
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            name="palabrasClave"
            placeholder="Palabras Claves"
            value={palabrasClave}
            onChange={onInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            name="fechaHasta"
            placeholder="Fecha Hasta"
            value={fechaHasta}
            onChange={onInputChange}
          />
        </div>
      </form>
      <NewsList
        mode="buscar"
        fechaDesde={fechaDesde}
        fechaHasta={fechaHasta}
        palabrasClave={palabrasClave}
      ></NewsList>
    </div>
  );
};
