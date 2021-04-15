import { Col, Row } from "react-bootstrap";
import MenuPrincipal from "./MenuPrincipal";

const Cabecera = () => (
  <Row as="header">
    <Col as="h1">
      SomDev
    </Col>
    <MenuPrincipal />
  </Row>
);

export default Cabecera;
