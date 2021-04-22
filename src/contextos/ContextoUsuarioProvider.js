// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import { useEffect, useReducer, useState } from "react";
import { usuarioReducer } from "../utils/reducers/usuarioReducer";
import { ContextoUsuario } from "./ContextoUsuario";
import useFetch from "../utils/hooks/useFetchToken";

const ContextoUsuarioProvider = props => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const [usuario, dispatch] = useReducer(usuarioReducer, {});
  const { datos: usuarioFetch, pideDatos: pideUsuarioFetch } = useFetch();
  const [existeToken, setExisteToken] = useState(false);
  const getUsuario = {
    usuario,
    existeToken,
    setExisteToken
  };
  useEffect(() => {
    if (existeToken) {
      const token = localStorage.getItem("token-usuario");
      const idUsuario = jwt_decode(token).id;
      const request = new Request(`http://localhost:5000/usuarios/${idUsuario}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      pideUsuarioFetch(request);
    }
  }, [existeToken]);
  useEffect(() => {
    if (usuarioFetch) {
      console.log(usuarioFetch);
      dispatch({
        type: "cargarUsuario",
        usuario: usuarioFetch
      });
    }
  }, [usuarioFetch]);
  return (
    <ContextoUsuario.Provider value={{
      dispatch, getUsuario
    }}
    >
      {
        children
      }
    </ContextoUsuario.Provider>
  );
};

export default ContextoUsuarioProvider;
