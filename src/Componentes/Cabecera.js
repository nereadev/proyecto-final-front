import { Col, Row } from "react-bootstrap";
import MenuPrincipal from "./MenuPrincipal";

const Cabecera = () => (
  <Row as="header" className="cabecera">
    <Col xs={2} as="h2" className="titulo">
      Ciutadà Verd
    </Col>
    <MenuPrincipal />
  </Row>
);

export default Cabecera;
