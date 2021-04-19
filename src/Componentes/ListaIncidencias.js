import { Col, Row } from "react-bootstrap";
import Incidencia from "./Incidencia";

const ListaIncidencias = () => (
  <Row as="section" className="lista-incidencias">
    <Col>
      <Row className="titulo-lista">
        <Col><i className="fas fa-list-ul" /></Col>
        <Col>Nombre</Col>
        <Col>Tipo</Col>
        <Col>Descripción</Col>
        <Col><i className="fas fa-star" /></Col>
        <Col>+info</Col>
      </Row>
      <Incidencia />
    </Col>
  </Row>
);

export default ListaIncidencias;
