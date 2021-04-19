import {
  Col, Button, Nav, Navbar, NavDropdown
} from "react-bootstrap";

const MenuPrincipal = () => (
  <Col xs={10} className="navegacion">
    <Navbar expand="lg" className="navegacion">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="menuCabecera">
          <Nav.Link href="/inicio" className="navItem">Mapa / Incidencias</Nav.Link>
          <Nav.Link href="/nueva-incidencia" className="navItem">Nueva Incidencia</Nav.Link>
          <Nav.Link href="/mis-incidencias" className="navItem"> Mis incidencias</Nav.Link>
          <Nav.Link href="/como-funciona" className="navItem"> Cómo funciona?</Nav.Link>
          <Nav.Link href="/mi-cuenta" className="navItem">Configuración</Nav.Link>
          <Nav.Link href="/contacto" className="navItem">Contacto</Nav.Link>
          <Button variant="dark" href="registro" className="navItem registroBoton">Registro</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Col>
);

export default MenuPrincipal;
