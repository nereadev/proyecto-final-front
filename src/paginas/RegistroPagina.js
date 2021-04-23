import { Col, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import AccederForm from "../componentes/AccederForm";
import CrearCuentaForm from "../componentes/CrearCuentaForm";

const RegistroPagina = () => {
  const { accion } = useParams();
  const history = useHistory();
  if (accion !== "acceder" && accion !== "crear-cuenta") {
    history.push("/inicio");
  }
  return (
    <Row as="main" className="registro-pagina">
      {accion === "acceder"
        ? <AccederForm />
        : <CrearCuentaForm />}
    </Row>
  );
};

export default RegistroPagina;
