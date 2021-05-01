import { useEffect, useState } from "react";
import { ContextoToken } from "./ContextoToken";

const ContextoTokenProvider = props => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const token = localStorage.getItem("token-usuario");
  const [existeToken, setExisteToken] = useState(false);
  const existenciaToken = {
    existeToken,
    token,
    setExisteToken
  };

  useEffect(() => {
    if (token) {
      setExisteToken(true);
    } else {
      setExisteToken(false);
    }
  }, [token]);

  return (
    <ContextoToken.Provider value={existenciaToken}>
      {
        children
      }
    </ContextoToken.Provider>
  );
};

export default ContextoTokenProvider;
