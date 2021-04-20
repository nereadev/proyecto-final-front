import { useCallback, useState } from "react";

const useFetch = () => {
  const [datos, setDatos] = useState(null);
  const pideDatos = useCallback(async url => {
    const resp = await fetch(url);
    const datosAPI = await resp.json();
    setDatos(datosAPI);
  }, []);
  const resetDatos = useCallback(() => {
    setDatos(null);
  }, []);
  return { datos, pideDatos, resetDatos };
};

export default useFetch;
