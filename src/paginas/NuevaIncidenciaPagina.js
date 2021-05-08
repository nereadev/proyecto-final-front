import { Col, Row } from "react-bootstrap";
import LocalizacionForm from "../Componentes/LocalizacionForm";

const NuevaIncidenciaPagina = () => (
  <Row as="main">
    <Col sm={12} as="h2">Nueva Incidencia</Col>
    <LocalizacionForm />
  </Row>
);

export default NuevaIncidenciaPagina;
