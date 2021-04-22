import { useContext } from "react";
import { ContextoToken } from "../../contextos/ContextoToken";

const useSesion = () => {
  const { setExisteToken } = useContext(ContextoToken);
  const cerrarSesion = () => {
    localStorage.removeItem("token-usuario");
    setExisteToken(false);
  };
  return cerrarSesion;
};

export default useSesion;
