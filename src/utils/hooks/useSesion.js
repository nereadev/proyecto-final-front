import { useContext } from "react";
import { useHistory } from "react-router";
import { ContextoToken } from "../../contextos/ContextoToken";

const useSesion = () => {
  const { setExisteToken } = useContext(ContextoToken);
  const history = useHistory();
  const cerrarSesion = () => {
    localStorage.removeItem("token-usuario");
    setExisteToken(false);
    history.push("/inicio");
  };
  return cerrarSesion;
};

export default useSesion;
