import React, { useContext } from "react";
import { contextoSupabase } from "../context/ProveedorSupabase.jsx";
import ValorEstado from "../components/tools/ValorEstado.jsx";

const SupabaseEdicion = () => {
  /**
   * Se extraen las herramientas necesarias del contexto.
   * Evidentemente esta no es la mejor manera de hacerlo.
   */
  const { editarFeo, errorFeos } = useContext(contextoSupabase);

  /**
   * Se crea un componente nuevo para su inserción.
   * Evidentemente esta infromación se obtiene a través
   * de un formulario controlado.
   */
  const feoEditado = {
    id: "indicarIdDelElemento",
    name: "Horrible",
    email: "horrible@horrible.es@feo.es",
    phone: "444555666",
    address: "Avenida Horrible s/n",
    country: "Burkina Faso",
  };

  /**
   * ¡¡IMPORTANTE!!.
   * Será necesario indicar el id del elemento a editar,
   * pero nunca se edita (restricción de la BBDD).
   */

  return (
    <>
      <h2>Edición de datos en Supabase.</h2>
      <button
        onClick={() => {
          editarFeo(feoEditado);
        }}
      >
        Editar feo
      </button>
      <ValorEstado
        estado={feoEditado}
        titulo='Datos del nuevo feo a insertar.'
      />

      <div>{errorFeos}</div>
    </>
  );
};

export default SupabaseEdicion;
