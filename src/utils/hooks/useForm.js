import { useState } from "react";

const useForm = datosFormInicial => {
  const [datosForm, setDatosForm] = useState(datosFormInicial);
  const modificarDatos = e => {
    setDatosForm({
      ...datosForm,
      [e.target.name]: e.target.value
    });
  };
  return { datosForm, modificarDatos };
};

export default useForm;
