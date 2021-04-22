import { useContext } from "react";
import { Route } from "react-router";
import { ContextoUsuario } from "../contextos/ContextoUsuario";

export const RutaProtegida = (props) => {
  const { getUsuario } = useContext(ContextoUsuario);
  return (
    <>
      {
        getUsuario.existeToken && <Route {...props} />
      }
    </>
  );
};
