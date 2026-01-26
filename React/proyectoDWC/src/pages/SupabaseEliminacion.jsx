import React, { useContext } from "react";
import { contextoSupabase } from "../context/ProveedorSupabase.jsx";

const SupabaseEliminacion = () => {
  /**
   * Se extraen las herramientas necesarias del contexto.
   * Evidentemente esta no es la mejor manera de hacerlo.
   */
  const { eliminarFeo, errorFeos } = useContext(contextoSupabase);

  /**
   * Identificador del elemento a elminar de la BBDD.
   */

  const ID = "280f8ed9-74ef-4a61-b699-269cdf01aa56";

  return (
    <>
      <h2>Eliminación de datos en Supabase.</h2>
      <button
        onClick={() => {
          eliminarFeo(ID);
        }}
      >
        Eliminar feo
      </button>
      <div>{errorFeos}</div>
    </>
  );
};

export default SupabaseEliminacion;
