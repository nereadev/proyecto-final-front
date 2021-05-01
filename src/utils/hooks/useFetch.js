import { useContext, useCallback, useState } from "react";
import { ContextoToken } from "../../contextos/ContextoToken";

const useFetch = () => {
  const { existeToken, token } = useContext(ContextoToken);
  const urlLocal = process.env.REACT_APP_API_URL;
  const [datos, setDatos] = useState(null);
  const [statusApi, setStatusApi] = useState(null);
  const pideDatos = useCallback(async (apiPropia, endpoint, requiereToken, opciones = {}) => {
    if (requiereToken) {
      if (existeToken) {
        opciones = {
          ...opciones,
          headers: { ...opciones.headers, Authorization: `Bearer ${token}` }
        };
      }
    }
    const resp = await fetch(apiPropia ? `${urlLocal}/${endpoint}` : endpoint, opciones);
    const datosAPI = await resp.json();
    const statusAPI = await resp.status;
    setDatos(datosAPI);
    setStatusApi(statusAPI);
  }, []);
  return { datos, statusApi, pideDatos };
};

export default useFetch;
