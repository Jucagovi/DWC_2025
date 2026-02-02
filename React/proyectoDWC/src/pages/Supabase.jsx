import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Contenedor from "../components/Contenedor";
import { contextoSesion } from "../context/ProveedorSesion.jsx";
import ProveedorSupabase from "../context/ProveedorSupabase.jsx";
import MenuSupabase from "../components/menu/submenu/MenuSupabase.jsx";

const Supabase = () => {
  return (
    <>
      <h2>Panel de administración.</h2>
      <MenuSupabase />
      <Contenedor>
        <ProveedorSupabase>
          <Outlet />
        </ProveedorSupabase>
      </Contenedor>
    </>
  );
};

export default Supabase;
