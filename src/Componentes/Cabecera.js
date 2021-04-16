import { Col, Row } from "react-bootstrap";
import MenuPrincipal from "./MenuPrincipal";

const Cabecera = () => (
  <Row as="header" className="cabecera">
    <Col as="h2">
      Ciutadà Verd
    </Col>
    <MenuPrincipal />
  </Row>
);

export default Cabecera;
