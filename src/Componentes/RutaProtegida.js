/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from "react";
import { Route } from "react-router";
import { ContextoToken } from "../contextos/ContextoToken";

export const RutaProtegida = (props) => {
  const { props: { path } } = { props };
  const { existeToken } = useContext(ContextoToken);

  return (
    <>
      {
        path.includes("registro")
          ? !existeToken && <Route {...props} />
          : existeToken && <Route {...props} />
      }
    </>
  );
};
