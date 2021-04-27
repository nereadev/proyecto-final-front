import { useCallback, useState } from "react";

// parametros de pideDatos: apiPropia (booleano, false si es api externa), endpoint, opciones, filtrosQuery
const useFetch = () => {
  const urlLocal = process.env.REACT_APP_API_URL;
  const [datos, setDatos] = useState(null);
  const [statusApi, setStatusApi] = useState(null);
  const pideDatos = useCallback(async (apiPropia, endpoint, opciones = {}) => {
    const resp = await fetch(apiPropia ? `${urlLocal}/${endpoint}` : endpoint, opciones);
    const datosAPI = await resp.json();
    const statusAPI = await resp.status;
    setDatos(datosAPI);
    setStatusApi(statusAPI);
  }, []);
  return { datos, statusApi, pideDatos };
};

export default useFetch;
