import { useCallback, useState } from "react";

const useFetch = () => {
  const [datos, setDatos] = useState(null);
  const pideDatos = useCallback(async (url, opciones = {}) => {
    console.log("hola");
    const resp = await fetch(url, opciones);
    const datos = await resp.json();
    setDatos(datos);
  }, []);
  return {
    datos,
    pideDatos
  };
};

export default useFetch;
