import { Col, Row } from "react-bootstrap";
import Incidencia from "./Incidencia";

const ListaIncidencias = () => (
  <Col as="section" md={12} className="lista-incidencias">
    <Row className="titulo-lista">
      <Col><i className="fas fa-list-ul" /></Col>
      <Col>Estado</Col>
      <Col>Nombre</Col>
      <Col>Tipo</Col>
      <Col>Código Postal</Col>
      <Col><i className="fas fa-star" /></Col>
      <Col>+Info</Col>
    </Row>
    <Incidencia />
  </Col>
);

export default ListaIncidencias;
