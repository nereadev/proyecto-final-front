import { useEffect, useState } from "react";
import { ContextoToken } from "./ContextoToken";

const ContextoTokenProvider = props => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const token = localStorage.getItem("token-usuario");
  const [existeToken, setExisteToken] = useState(false);
  useEffect(() => {
    if (token) {
      setExisteToken(true);
    } else {
      setExisteToken(false);
    }
  }, [token]);
  const existenciaToken = {
    existeToken,
    token,
    setExisteToken
  };
  return (
    <ContextoToken.Provider value={existenciaToken}>
      {
        children
      }
    </ContextoToken.Provider>
  );
};

export default ContextoTokenProvider;
