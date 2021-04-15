import { Col, Button, Row } from "react-bootstrap";

const MenuPrincipal = () => (
  <Col as="nav">
    <Row as="ul">
      <Col as="li"><span>¿Cómo funciona?</span></Col>
      <Col as="li"><span>Nueva Incidencia</span></Col>
      <Col as="li"><span>Lista Incidencias</span></Col>
      <Col as="li"><span>Mis incidencias</span></Col>
      <Col as="li"><span>Mi cuenta</span></Col>
      <Col as="li"><span>Contacto</span></Col>
    </Row>
    <Button variant="primary">Registro</Button>
  </Col>
);

export default MenuPrincipal;
