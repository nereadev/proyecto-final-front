import { useState } from "react";

const useForm = (datosFormInicial) => {
  const [formDatos, setFormDatos] = useState(datosFormInicial);
  const modificarDatos = e => {
    const nombrePropiedad = e.target.name;
    setFormDatos({
      ...formDatos,
      [nombrePropiedad]: e.target.value,
    });
  };
  return {
    formDatos,
    modificarDatos
  };
};

export default useForm;
