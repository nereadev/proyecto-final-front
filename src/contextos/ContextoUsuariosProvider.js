import { useEffect, useReducer } from "react";
import useFetch from "../utils/hooks/useFetch2";
import { usuariosReducer } from "../utils/reducers/usuariosReducer";
import { ContextoUsuarios } from "./ContextoUsuarios";

const ContextoUsuariosProvider = props => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const [usuarios, dispatch] = useReducer(usuariosReducer, []);
  const { datos: usuariosFetch, pideDatos: pideUsuariosFetch } = useFetch();
  const getUsuarios = {
    otraPropiedad: "Aquí puede ir otra propiedad relacionada con los usuarios",
    usuarios
  };
  useEffect(() => {
    pideUsuariosFetch(true, "usuarios");
  }, [pideUsuariosFetch]);
  useEffect(() => {
    if (usuariosFetch) {
      dispatch({
        type: "cargarUsuarios",
        usuarios: usuariosFetch
      });
    }
  }, [usuariosFetch]);
  return (
    <ContextoUsuarios.Provider value={{ dispatch, getUsuarios }}>
      {
        children
      }
    </ContextoUsuarios.Provider>
  );
};

export default ContextoUsuariosProvider;
