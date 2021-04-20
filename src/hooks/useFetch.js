import { useCallback, useState } from "react";

// parametros de pideDatos: apiPropia (booleano, false si es api externa), endpoint, metodo, filtrosQuery
const useFetch = () => {
  const urlLocal = "http://localhost:5000";
  const [datos, setDatos] = useState(null);
  const pideDatos = useCallback(async (apiPropia, endpoint) => {
    const resp = await fetch(apiPropia ? `${urlLocal}/${endpoint}` : endpoint);
    const datosAPI = await resp.json();
    setDatos(datosAPI);
  }, []);
  const resetDatos = useCallback(() => {
    setDatos(null);
  }, []);
  return { datos, pideDatos, resetDatos };
};

export default useFetch;
