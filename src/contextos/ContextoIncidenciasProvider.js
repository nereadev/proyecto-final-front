import { useEffect, useReducer } from "react";
import useFetch from "../utils/hooks/useFetch";
import { incidenciasReducer } from "../utils/reducers/incidenciasReducer";
import { ContextoIncidencias } from "./ContextoIncidencias";

const ContextoIncidenciasProvider = props => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const [incidencias, dispatch] = useReducer(incidenciasReducer, []);
  const { datos: incidenciasFetch, pideDatos: pideIncidenciasFetch } = useFetch();
  const getIncidencias = {
    otraPropiedad: "Aquí puede ir otra propiedad relacionada con las incidencias",
    incidencias
  };
  useEffect(() => {
    pideIncidenciasFetch(true, "incidencias");
  }, [pideIncidenciasFetch]);
  useEffect(() => {
    if (incidenciasFetch) {
      dispatch({
        type: "cargarIncidencias",
        incidencias: incidenciasFetch
      });
    }
  }, [incidenciasFetch]);
  return (
    <ContextoIncidencias.Provider value={{ dispatch, getIncidencias }}>
      {
        children
      }
    </ContextoIncidencias.Provider>
  );
};

export default ContextoIncidenciasProvider;
