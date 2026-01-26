import React, { useContext } from "react";
import { contextoSesion } from "../context/ProveedorSesion.jsx";
import { contextoSupabase } from "../context/ProveedorSupabase.jsx";
import ListadoFeos from "../components/supabaseFeos/ListadoFeos.jsx";

const SupabaseListado = () => {
  const { errorFeos } = useContext(contextoSupabase);
  return (
    <>
      <h2>Listado de datos en Supabase.</h2>
      <p>
        Este contenido sólo debe estar disponible para usuarios registrados.
      </p>
      {errorFeos ? errorFeos.message : <ListadoFeos />}
    </>
  );
};

export default SupabaseListado;
