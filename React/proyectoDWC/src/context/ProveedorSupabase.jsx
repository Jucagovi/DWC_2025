import React, { createContext, useState, useEffect } from "react";
/**
 * Se obtiene el objeto de conexión al servicio Supabase.
 */
import { supabaseConexion } from "../supabase/supabase.js";

const contextoSupabase = createContext();

/**
 * ¡¡¡ATENCIÓN!!!
 * El nombre de este contexto no es correcto se ha hecho así para que su localización sea rápida.
 * Todos/as sabemos que el nombre perfecto para este contexto es <ProveedorFeos>.
 */

/**
 * ¡¡¡ATENCIÓN POR SEGUNDA VEZ!!!
 * No toméis como referencia de diseño este contexto ya que sabéis que no es la mejor forma de hacerlo.
 * Está diseñado así únicamente con fines formativos. En vuestros proyectos no lo hagáis de esta manera.
 */
const ProveedorSupabase = ({ children }) => {
  /**
   * Valor incial del estado error.
   */

  const ERROR_INICIAL = "";

  /**
   * Estado para los feos.
   */
  const [feos, setFeos] = useState([]);
  const [feo, setFeo] = useState({});
  const [errorFeos, setErrorFeos] = useState(ERROR_INICIAL);

  /**
   * Función para obtener el listado de feos
   * usando la conexión al servicio supabase.
   */
  const obtenerListado = async () => {
    try {
      const { data, error } = await supabaseConexion.from("Feos").select("*");
      //console.log(data);
      //console.log(error);
      setFeos(data);
      setErrorFeos(ERROR_INICIAL);
    } catch (fallo) {
      setErrorFeos(fallo.message);
    }
  };

  /**
   * Operadores para consultas en Supabase.
   *
   * .eq('columna', 'valor')
   * .gt('columna', 'valor')
   * .lt('columna', 'valor')
   * .gte('columna', 'valor')
   * .lte('columna', 'valor')
   * .like('columna', 'valor') --> CaseSensitive
   * .ilike('columna', 'valor') --> CaseInsensitive
   * .is('columna', null)
   * .in('columna', [array de valores])
   * .neq('columna', 'valor')
   * .cs('columna', [contiene])
   * .cd('columna', [contenido por])
   */

  /**
   * Función para filtrar el listado de "feos"
   * usando el operador eq().
   */
  const filtrarFeos = async () => {
    try {
      const { data, error } = await supabaseConexion
        .from("Feos")
        .select("*")
        .eq("country", "Burkina Faso");
      setFeos(data);
      setErrorFeos(ERROR_INICIAL);
    } catch (fallo) {
      setErrorFeos(fallo.message);
    }
  };

  /**
   * Función para ordenar el listado de "feos"
   * usando la cláusula order.
   */
  const ordenarFeos = async (orden = true) => {
    try {
      const { data, error } = await supabaseConexion
        .from("Feos")
        .select("*")
        .order("name", { ascending: orden });
      setFeos(data);
      setErrorFeos(ERROR_INICIAL);
    } catch (fallo) {
      setErrorFeos(fallo.message);
    }
  };

  /**
   * Función para obtener los datos de un registro.
   */
  const obtenerFeo = async (id) => {
    try {
      const { data, error } = await supabaseConexion
        .from("Feos")
        .select("*")
        .eq("id", id);
      setFeo(data[0]);
      setErrorFeos(ERROR_INICIAL);
    } catch (fallo) {
      setErrorFeos(fallo.message);
    }
  };

  /**
   * Función para insertar el estado "feo" en la
   * base de datos de supabase.
   */

  const crearFeo = async (datos) => {
    // Se intentan insertar los datos.
    try {
      const respuesta = await supabaseConexion.from("Feos").insert(datos);
      console.log(respuesta);
      // Se actualiza el estado feos para añadir los cambios, o no.
      setFeos([...feos, datos]);
    } catch (error) {
      setErrorFeos(error.message);
    }
  };

  // ¿Se debe manejar el estado del contexto (feo) o recibirlo como parámetro?

  /**
   * Función para editar la información de un feo.
   */

  const editarFeo = async (datos) => {
    // Se intentan editar los datos.
    try {
      const { data, error } = await supabaseConexion
        .from("Feos")
        .update(datos)
        .eq("id", datos.id);

      if (error) throw error;

      const feosCambiados = feos.map((feoAntiguo) => {
        return feoAntiguo.id === datos.id ? datos : feoAntiguo;
      });
      setFeos(feosCambiados);
    } catch (error) {
      setErrorFeos(error.message);
    }
  };

  // ¿Se le pasa en id dentro del objeto?
  // ¿Se añade un segundo parámetro?

  /**
   * Función para borrar un registro de la
   * base de datos.
   */
  const eliminarFeo = async (id) => {
    // Se intenta borrar el elemento.
    try {
      const { data, error } = await supabaseConexion
        .from("Feos")
        .delete()
        .eq("id", id);

      /**
       * Si todo ha ido bien, se actualiza el estado del contexto.
       * Para ello se recorre el estado "feos" y se
       * devuelven todos los objetos cuyo "id" sea diferente
       * al que se ha eliminado.
       */
      const feosFiltrados = feos.filter((feo) => {
        if (feo.id !== id) {
          return feo;
        }
      });
      // Se actualiza el estado.
      setFeos(feosFiltrados);
    } catch (error) {
      setErrorFeos(error.message);
    }
  };

  /**
   * ¿Se obtienen los productos al montar el constexto?
   */
  useEffect(() => {
    obtenerListado();
  }, []);

  /**
   * Elementos a compartir por el contexto.
   */
  const datosProveer = {
    feos,
    errorFeos,
    obtenerListado,
    filtrarFeos,
    ordenarFeos,
    obtenerFeo,
    crearFeo,
    eliminarFeo, 
    editarFeo
  };
  return (
    <contextoSupabase.Provider value={datosProveer}>
      {children}
    </contextoSupabase.Provider>
  );
};;

export default ProveedorSupabase;
export { contextoSupabase };
