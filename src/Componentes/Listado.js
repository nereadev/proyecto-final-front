import { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { ContextoToken } from "../contextos/ContextoToken";
import FiltrosIncidencias from "./FiltrosIncidencias";
import Incidencia from "./Incidencia";

const Listado = () => {
  const { existeToken } = useContext(ContextoToken);
  const history = useHistory();

  const linkNuevaIncidencia = () => {
    if (existeToken) {
      history.push("/nueva-incidencia");
    } else {
      history.push("/registro/acceder");
    }
  };

  return (
    <>
      <Row as="h2">
        Lista de Incidencias Generales
        <Col>
          {existeToken && (
            <Button onClick={linkNuevaIncidencia} className="nueva-incidencia ">
              + Incidencia
            </Button>
          )}
        </Col>
      </Row>
      <FiltrosIncidencias />
      <Incidencia />
    </>
  );
};

export default Listado;
