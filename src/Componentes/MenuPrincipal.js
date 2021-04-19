import {
  Col, Button, Nav
} from "react-bootstrap";

const MenuPrincipal = () => (
  <Col xs={10}>
    <Nav className="navMenu">
      <Nav.Item className="navLista"><Nav.Link href="/inicio" className="navItem">Mapa / Incidencias</Nav.Link></Nav.Item>
      <Nav.Item className="navLista"><Nav.Link href="/incidencia" className="navItem">Nueva Incidencia</Nav.Link></Nav.Item>
      <Nav.Item className="navLista"><Nav.Link href="/mis-incidencias" className="navItem"> Mis incidencias</Nav.Link></Nav.Item>
      <Nav.Item className="navLista"><Nav.Link href="/como-funciona" className="navItem"> Cómo funciona?</Nav.Link></Nav.Item>
      <Nav.Item className="navLista"><Nav.Link href="/mi-cuenta" className="navItem">Configuración</Nav.Link></Nav.Item>
      <Nav.Item className="navLista"><Nav.Link href="/contacto" className="navItem">Contacto</Nav.Link></Nav.Item>
      <Nav.Item className="navLista"><Button variant="dark" href="registro" className="navItem registroBoton">Registro</Button></Nav.Item>
    </Nav>
  </Col>
);

export default MenuPrincipal;
