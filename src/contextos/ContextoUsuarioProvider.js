import { useEffect, useReducer, useState } from "react";
import useFetch from "../utils/hooks/useFetch2";
import { usuarioReducer } from "../utils/reducers/usuarioReducer";
import { ContextoUsuario } from "./ContextoUsuario";

const ContextoUsuarioProvider = props => {
  // bj@ceprene.com
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const [usuarioEmail, setUsuarioEmail] = useState(null);
  const [usuario, dispatch] = useReducer(usuarioReducer, {});
  const { datos: usuarioFetch, pideDatos: pideUsuarioFetch } = useFetch();
  const getUsuario = {
    otraPropiedad: "Aquí puede ir otra propiedad relacionada con el usuario",
    usuario
  };
  useEffect(() => {
    if (usuarioEmail) {
      pideUsuarioFetch(true, `usuarios/${usuarioEmail}`);
    }
  }, [usuarioEmail, pideUsuarioFetch]);
  useEffect(() => {
    if (usuarioFetch) {
      console.log(usuarioFetch);
      dispatch({
        type: "cargarUsuario",
        usuario: usuarioFetch
      });
    }
    console.log(usuario);
  }, [usuarioFetch]);
  return (
    <ContextoUsuario.Provider value={{ dispatch, getUsuario, setUsuarioEmail }}>
      {
        children
      }
    </ContextoUsuario.Provider>
  );
};

export default ContextoUsuarioProvider;
