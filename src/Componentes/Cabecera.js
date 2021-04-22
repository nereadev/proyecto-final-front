import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuPrincipal from "./MenuPrincipal";

const Cabecera = () => (
  <Row as="header" className="cabecera">
    <Col xs={2} as="h2" className="titulo">
      <Link to="/inicio">Ciutadà Verd</Link>
    </Col>
    <MenuPrincipal />
  </Row>
);

export default Cabecera;
