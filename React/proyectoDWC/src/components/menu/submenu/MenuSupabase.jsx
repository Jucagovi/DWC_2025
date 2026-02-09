import React, { useContext } from "react";
import { contextoSesion } from "../../../context/ProveedorSesion.jsx";
import { Link } from "react-router-dom";
import "./MenuSupabase.css";

const MenuSupabase = () => {
  const { sesionIniciada } = useContext(contextoSesion);
  return (
    <>
      <nav className='menusupabase-navegacion'>
        <Link className='menusupabase-elementomenu' to='/supabase/inicio'>
          Inicio
        </Link>
        {!sesionIniciada && (
          <Link
            className='menusupabase-elementomenu'
            to='/supabase/iniciarSesion'
          >
            Iniciar Sesión
          </Link>
        )}
        {sesionIniciada && (
          <>
            <Link className='menusupabase-elementomenu' to='/supabase/listado'>
              Listado
            </Link>
            <Link className='menusupabase-elementomenu' to='/supabase/creacion'>
              Creación
            </Link>
            <Link className='menusupabase-elementomenu' to='/supabase/edicion'>
              Edición
            </Link>
            <Link
              className='menusupabase-elementomenu'
              to='/supabase/eliminacion'
            >
              Eliminación
            </Link>
            <Link
              className='menusupabase-elementomenu'
              to='/supabase/multitabla'
            >
              Multitabla
            </Link>
            <Link className='menusupabase-elementomenu' to='/supabase/roles'>
              Roles
            </Link>
          </>
        )}
      </nav>
    </>
  );
};

export default MenuSupabase;
