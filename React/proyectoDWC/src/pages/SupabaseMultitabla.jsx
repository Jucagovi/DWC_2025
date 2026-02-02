import React, { useContext } from "react";
import { contextoSupabase } from "../context/ProveedorSupabase.jsx";
import ValorEstado from "../components/tools/ValorEstado.jsx";

const SupabaseMultitabla = () => {
  const {
    multitabla,
    errorFeos,
    obtenerCiudades,
    obtenerDiscentesNotas,
    obtenerPracticasNotas,
  } = useContext(contextoSupabase);
  return (
    <>
      <h2>Consultas multitabla.</h2>
      <button
        onClick={() => {
          obtenerCiudades();
        }}
      >
        Ciudades
      </button>
      <button
        onClick={() => {
          obtenerDiscentesNotas();
        }}
      >
        Notas por discente
      </button>
      <button
        onClick={() => {
          obtenerPracticasNotas();
        }}
      >
        Notas por práctica
      </button>
      <ValorEstado
        estado={multitabla}
        titulo='Datos de la consulta multitabla.'
      />

      <div>{errorFeos}</div>
    </>
  );
};

export default SupabaseMultitabla;
