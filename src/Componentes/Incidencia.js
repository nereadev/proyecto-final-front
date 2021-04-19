import { Button, Col, Row } from "react-bootstrap";

const Incidencia = () => (
  <Row className="incidencia-lista">
    <Col>1</Col>
    <Col>Árbol caído</Col>
    <Col>Medio Ambiente</Col>
    <Col>Hay un árbol caído</Col>
    <Col>7</Col>
    <Col><a href="./incidencia/:id"><i className="fas fa-plus" aria-label="Detalle incidencia" /></a></Col>
  </Row>
);

export default Incidencia;
