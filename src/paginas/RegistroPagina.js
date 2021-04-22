import { Col, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import AccederForm from "../componentes/AccederForm";
import CrearCuentaForm from "../componentes/CrearCuentaForm";
import InicioPagina from "./InicioPagina";

const RegistroPagina = () => {
  const { accion } = useParams();
  const history = useHistory();
  if (accion !== "acceder" && accion !== "crear-cuenta") {
    history.push("/inicio");
  }
  return (
    <Row as="main">
      <Col>
        {accion === "acceder"
          ? <AccederForm />
          : <CrearCuentaForm />}
      </Col>
    </Row>
  );
};

export default RegistroPagina;
