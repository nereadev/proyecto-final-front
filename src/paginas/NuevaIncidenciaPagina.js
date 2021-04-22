import { Col, Row } from "react-bootstrap";
import LocalizacionForm from "../componentes/LocalizacionForm";

const NuevaIncidenciaPagina = () => (
  <>
    <Row as="main">
      <Col>
        <Row as="h2">Formulario Incidencia</Row>
        <Row as="section" className="nueva-incidencia">
          <LocalizacionForm />
        </Row>
      </Col>
    </Row>
  </>
);

export default NuevaIncidenciaPagina;
