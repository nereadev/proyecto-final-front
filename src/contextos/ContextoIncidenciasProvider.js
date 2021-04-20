import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { ContextoIncidencias } from "./ContextoIncidencias";

const ContextoIncidenciasProvider = props => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const { datos: incidenciasFetch, pideDatos: pideIncidenciasFetch } = useFetch();
  useEffect(() => {
    pideIncidenciasFetch(true, "incidencias");
  }, [pideIncidenciasFetch]);
  useEffect(() => {
    console.log(incidenciasFetch);
  }, [incidenciasFetch]);
  return (
    <ContextoIncidencias.Provider value="nada de nada">
      { children}
    </ContextoIncidencias.Provider>
  );
};

export default ContextoIncidenciasProvider;
