import { Col, Button, Row } from "react-bootstrap";

const MenuPrincipal = () => (
  <Col xs={8} as="nav" className="navMenu">
    <Row as="ul" className="list-unstyled navLista">
      <Col as="li" className="navLista"><span className="navItem">Nueva Incidencia</span></Col>
      <Col as="li" className="navLista"><span className="navItem">Lista Incidencias</span></Col>
      <Col as="li" className="navLista"><span className="navItem"> Mis incidencias</span></Col>
      <Col as="li" className="navLista"><span className="navItem">Mi cuenta</span></Col>
      <Col as="li" className="navLista"><span className="navItem">Contacto</span></Col>
      <Col as="li" className="navLista"><Button variant="dark" className="navItem registro">Registro</Button></Col>
    </Row>
  </Col>
);

export default MenuPrincipal;
