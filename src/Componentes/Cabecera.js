import { Col, Row } from "react-bootstrap";
import MenuPrincipal from "./MenuPrincipal";

const Cabecera = () => (
  <Row as="header" className="cabecera">
    <Col xs={2} as="h2" className="titulo">
      <a href="/inicio">Ciutadà Verd</a>
    </Col>
    <MenuPrincipal />
  </Row>
);

export default Cabecera;
