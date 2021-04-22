/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from "react";
import { Route, useParams } from "react-router";
import { ContextoUsuario } from "../contextos/ContextoUsuario";

export const RutaProtegida = (props) => {
  const { props: { path } } = { props };
  const { getUsuario } = useContext(ContextoUsuario);

  return (
    <>
      {
        path.includes("registro")
          ? !getUsuario.existeToken && <Route {...props} />
          : getUsuario.existeToken && <Route {...props} />
      }
    </>
  );
};
