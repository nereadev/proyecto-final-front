import { useState } from "react";
import { ContextoToken } from "./ContextoToken";

const ContextoTokenProvider = props => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const [existeToken, setExisteToken] = useState(false);
  const existenciaToken = {
    existeToken,
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
