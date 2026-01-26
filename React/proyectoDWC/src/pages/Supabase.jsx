import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Contenedor from "../components/Contenedor";
import { contextoSesion } from "../context/ProveedorSesion.jsx";
import "./Supabase.css";
import ProveedorSupabase from "../context/ProveedorSupabase.jsx";

const Supabase = () => {
  const { sesionIniciada } = useContext(contextoSesion);
  return (
    <>
      <h2>Panel de administración.</h2>
      <nav className='supabase-navegacion'>
        <Link className='supabase-elementomenu' to='/supabase/inicio'>
          Inicio
        </Link>
        {!sesionIniciada && (
          <Link className='supabase-elementomenu' to='/supabase/iniciarSesion'>
            Iniciar Sesión
          </Link>
        )}
        {sesionIniciada && (
          <>
            <Link className='supabase-elementomenu' to='/supabase/listado'>
              Listado
            </Link>
            <Link className='supabase-elementomenu' to='/supabase/creacion'>
              Creación
            </Link>
            <Link className='supabase-elementomenu' to='/supabase/edicion'>
              Edición
            </Link>
            <Link className='supabase-elementomenu' to='/supabase/eliminacion'>
              Eliminación
            </Link>
          </>
        )}
      </nav>
      <Contenedor>
        <ProveedorSupabase>
          <Outlet />
        </ProveedorSupabase>
      </Contenedor>
    </>
  );
};

export default Supabase;
