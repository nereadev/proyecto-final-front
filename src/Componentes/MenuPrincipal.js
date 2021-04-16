import {
  Col, Button, Nav
} from "react-bootstrap";

const MenuPrincipal = () => (
  <Col xs={12} className="navMenu">
    <Nav className="navLista">
      <Nav.Item className="navLista"><Nav.Link className="navItem">Nueva Incidencia</Nav.Link></Nav.Item>
      <Nav.Item className="navLista"><Nav.Link className="navItem">Mapa / Lista incidencias</Nav.Link></Nav.Item>
      <Nav.Item className="navLista"><Nav.Link className="navItem"> Mis incidencias</Nav.Link></Nav.Item>
      <Nav.Item className="navLista"><Nav.Link className="navItem"> Cómo funciona?</Nav.Link></Nav.Item>
      <Nav.Item className="navLista"><Nav.Link className="navItem">Configuración</Nav.Link></Nav.Item>
      <Nav.Item className="navLista"><Nav.Link className="navItem">Contacto</Nav.Link></Nav.Item>
      <Nav.Item className="navLista"><Button variant="dark" className="navItem registro">Registro</Button></Nav.Item>
    </Nav>
  </Col>
);

export default MenuPrincipal;
