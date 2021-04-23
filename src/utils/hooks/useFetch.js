import { useCallback, useState } from "react";

// parametros de pideDatos: apiPropia (booleano, false si es api externa), endpoint, opciones, filtrosQuery
const useFetch = () => {
  const urlLocal = process.env.REACT_APP_API_URL;
  const [datos, setDatos] = useState(null);
  const pideDatos = useCallback(async (apiPropia, endpoint, opciones = {}) => {
    const resp = await fetch(apiPropia ? `${urlLocal}/${endpoint}` : endpoint, opciones);
    console.log(resp);
    const datosAPI = await resp.json();
    setDatos(datosAPI);
  }, []);
  return { datos, pideDatos };
};

export default useFetch;
