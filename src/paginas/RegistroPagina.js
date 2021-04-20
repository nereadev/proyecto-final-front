import { Row } from "react-bootstrap";
import { useParams } from "react-router";
import AccederForm from "../componentes/AccederForm";
import CrearCuentaForm from "../componentes/CrearCuentaForm";

const RegistroPagina = () => {
  const { accion } = useParams();
  return (
    <Row as="main">
      {accion === "acceder"
        ? <AccederForm />
        : <CrearCuentaForm />}
    </Row>
  );
};

export default RegistroPagina;
