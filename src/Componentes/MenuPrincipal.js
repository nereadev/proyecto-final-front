import {
  Col, Button, Nav
} from "react-bootstrap";

const MenuPrincipal = () => (
  <Col xs={8} className="navMenu">
    <Nav className="navLista">
      <Nav.Item className="navLista"><Nav.Link className="navItem">Nueva Incidencia</Nav.Link></Nav.Item>
      <Nav.Item className="navLista"><Nav.Link className="navItem">Lista Incidencias</Nav.Link></Nav.Item>
      <Nav.Item className="navLista"><Nav.Link className="navItem"> Mis incidencias</Nav.Link></Nav.Item>
      <Nav.Item className="navLista"><Nav.Link className="navItem">Mi cuenta</Nav.Link></Nav.Item>
      <Nav.Item className="navLista"><Nav.Link className="navItem">Contacto</Nav.Link></Nav.Item>
      <Nav.Item className="navLista"><Button variant="dark" className="navItem registro">Registro</Button></Nav.Item>
    </Nav>
  </Col>
);

export default MenuPrincipal;
