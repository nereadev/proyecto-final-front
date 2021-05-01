import { useEffect, useReducer, useState } from "react";
import useFetch from "../utils/hooks/useFetch";
import { incidenciasReducer } from "../utils/reducers/incidenciasReducer";
import { ContextoIncidencias } from "./ContextoIncidencias";

const ContextoIncidenciasProvider = props => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const [incidencias, dispatch] = useReducer(incidenciasReducer, []);
  const [query, setQuery] = useState(null);
  const [query2, setQuery2] = useState(null);
  const { datos: incidenciasFetch, pideDatos: pideIncidenciasFetch } = useFetch();
  const getIncidencias = {
    incidencias,
    setQuery,
    setQuery2
  };

  useEffect(() => {
    pideIncidenciasFetch(true, `incidencias${query ? `?tipo=${query}` : ""}${query2 ? `&ordenPor=${query2}` : ""}`);
  }, [pideIncidenciasFetch, query, query2]);
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
