import { useState } from "react";

const useForm = datosFormInicial => {
  const [datosForm, setDatosForm] = useState(datosFormInicial);
  const modificarDatos = e => {
    if (e.target.type === "file") {
      setDatosForm({
        ...datosForm,
        [e.target.name]: e.target.files[0]
      });
    } else {
      setDatosForm({
        ...datosForm,
        [e.target.name]: e.target.value
      });
    }
  };
  return { datosForm, modificarDatos };
};

export default useForm;
