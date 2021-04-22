// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import { useEffect, useReducer, useState } from "react";
import { useHistory } from "react-router";
import { usuarioReducer } from "../utils/reducers/usuarioReducer";
import { ContextoUsuario } from "./ContextoUsuario";
import useFetch from "../utils/hooks/useFetch";

const ContextoUsuarioProvider = props => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const history = useHistory();
  const [usuario, dispatch] = useReducer(usuarioReducer, {});
  const { datos: usuarioFetch, pideDatos: pideUsuarioFetch } = useFetch();
  const [existeToken, setExisteToken] = useState(false);
  const getUsuario = {
    usuario,
    existeToken,
    setExisteToken
  };
  useEffect(() => {
    const token = localStorage.getItem("token-usuario");
    if (token) {
      if (!existeToken) {
        setExisteToken(true);
      } else {
        const idUsuario = jwt_decode(token).id;
        pideUsuarioFetch(true, `usuarios/${idUsuario}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    } else {
      setExisteToken(false);
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
