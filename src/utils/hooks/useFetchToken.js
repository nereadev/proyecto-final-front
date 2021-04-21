import { useCallback, useState } from "react";

// parametros de pideDatos: apiPropia (booleano, false si es api externa), endpoint, metodo, filtrosQuery
const useFetch = () => {
  const [datos, setDatos] = useState(null);
  const pideDatos = useCallback(async (request) => {
    const resp = await fetch(request);
    const datos = await resp.json();
    setDatos(datos);
  }, []);
  return {
    datos,
    pideDatos
  };
};

export default useFetch;
