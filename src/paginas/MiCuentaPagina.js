import { Button, Col, Row } from "react-bootstrap";

const MiCuentaPagina = () => (
  <>
    <Row as="h2">Mi cuenta</Row>
    <Col as="ul">
      <Row>Nombre:</Row>
      <Row> Apellidos:</Row>
      <Row>
        Email:
        <Button className="modificar-cuenta" type="submit" variant="light">Modificar</Button>
      </Row>
      <Row>
        Contraseña:****
        <Button className="modificar-cuenta" type="submit" variant="light">Modificar</Button>
      </Row>
      <Row>
        Mis incidencias
        <Col><i className="fas fa-plus" /></Col>
      </Row>
    </Col>
  </>
);

export default MiCuentaPagina;
