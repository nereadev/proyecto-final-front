import { Button, Col, Row } from "react-bootstrap";
import Cabecera from "../componentes/Cabecera";
import Footer from "../componentes/Footer";

const MiCuentaPagina = () => (
  <>
    <Cabecera />
    <Row as="h2">Mi cuenta</Row>
    <Col className="mi-cuenta" as="ul">
      <Row>
        <Col>Nombre:</Col>
        <Col>Risquetto</Col>
        <Col />
      </Row>
      <Row>
        <Col>Apellidos:</Col>
        <Col>Panchi</Col>
        <Col />
      </Row>
      <Row>
        <Col>Email:</Col>
        <Col>risquettopanchi@gmail.com</Col>
        <Button as={Col} className="modificar-cuenta" type="submit" variant="light">Modificar</Button>
      </Row>
      <Row>
        <Col>Contraseña:</Col>
        <Col>******************************</Col>
        <Button as={Col} className="modificar-cuenta" type="submit" variant="light">Modificar</Button>
      </Row>
      <Row>
        <Col>Mis incidencias</Col>
        <Col><a href="./mis-incidencias"><i className="fas fa-plus" aria-label="Mis incidencias" /></a></Col>
        <Col />
      </Row>
    </Col>
    <Footer />
  </>
);

export default MiCuentaPagina;
