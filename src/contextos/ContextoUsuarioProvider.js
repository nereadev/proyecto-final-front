// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import {
  useEffect, useReducer, useState, useContext
} from "react";
import { useHistory } from "react-router";
import { usuarioReducer } from "../utils/reducers/usuarioReducer";
import { ContextoUsuario } from "./ContextoUsuario";
import useFetch from "../utils/hooks/useFetch";
import { ContextoToken } from "./ContextoToken";

const ContextoUsuarioProvider = props => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const history = useHistory();
  const [usuario, dispatch] = useReducer(usuarioReducer, []);
  const { datos: usuarioFetch, pideDatos: pideUsuarioFetch } = useFetch();
  // const [existeToken, setExisteToken] = useState(true);
  const { existeToken, setExisteToken } = useContext(ContextoToken);
  const getUsuario = {
    usuario
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
      dispatch({
        type: "cargarUsuario",
        usuario: usuarioFetch
      });
    }
  }, [usuarioFetch]);
  return (
    <ContextoUsuario.Provider value={{ dispatch, getUsuario }}>
      {
        children
      }
    </ContextoUsuario.Provider>
  );
};

export default ContextoUsuarioProvider;
