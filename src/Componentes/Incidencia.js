import { Button, Col, Row } from "react-bootstrap";

const Incidencia = () => {
  const id = "1";
  return (
    <Row className="incidencia-lista">
      <Col>1</Col>
      <Col>Árbol caído</Col>
      <Col>Medio Ambiente</Col>
      <Col>Hay un árbol caído</Col>
      <Col>7</Col>
      <Col><Button variant="secondary" href={`/incidencia/${id}`} className="detalle"><i className="fas fa-plus" /></Button></Col>
    </Row>
  );
};

export default Incidencia;
