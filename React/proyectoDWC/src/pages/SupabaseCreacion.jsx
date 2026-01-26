import React, { useContext } from "react";
import { contextoSupabase } from "../context/ProveedorSupabase.jsx";
import ValorEstado from "../components/tools/ValorEstado.jsx";

const SupabaseCreacion = () => {
  /**
   * Se extraen las herramientas necesarias del contexto.
   * Evidentemente esta no es la mejor manera de hacerlo.
   */
  const { crearFeo, errorFeos } = useContext(contextoSupabase);

  /**
   * Se crea un componente nuevo para su inserción.
   * Evidentemente esta infromación se obtiene a través
   * de un formulario controlado.
   */
  const feoNuevo = {
    name: "Feo",
    email: "feo@feo.es",
    phone: "111222333",
    address: "Avenida Fea s/n",
    country: "Burkina Faso",
  };

  /**
   * ¡¡IMPORTANTE!!.
   * No se genera el "id" ni "created_at" ya que son
   * campos que debe gestionar el SGBD (Supabase en este caso).
   */

  return (
    <>
      <h2>Creación de usuarios en Supabase.</h2>
      <button
        onClick={() => {
          crearFeo(feoNuevo);
        }}
      >
        Insertar feo
      </button>
      <ValorEstado estado={feoNuevo} titulo='Datos del nuevo feo a insertar.' />

      <div>{errorFeos}</div>
    </>
  );
};

export default SupabaseCreacion;
