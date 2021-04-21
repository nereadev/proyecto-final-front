import { useState } from "react";
import {
  Col, Button, Nav, Navbar
} from "react-bootstrap";

const MenuPrincipal = () => {
  const [logeado, setLogeado] = useState(false);
  return (
    <Col xs={10} className="navegacion">
      <Navbar expand="lg" className="navegacion">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="menuCabecera">
            <Nav.Link href="/inicio" className="navItem">Mapa / Incidencias</Nav.Link>
            {logeado && <Nav.Link href="/nueva-incidencia" className="navItem">Nueva Incidencia</Nav.Link>}
            {logeado && <Nav.Link href="/mis-incidencias" className="navItem"> Mis incidencias</Nav.Link>}
            <Nav.Link href="/como-funciona" className="navItem"> Cómo funciona?</Nav.Link>
            {logeado && <Nav.Link href="/mi-cuenta" className="navItem">Mi cuenta</Nav.Link>}
            <Nav.Link href="/contacto" className="navItem">Contacto</Nav.Link>
            {!logeado && <Button variant="dark" onClick={(e) => { e.preventDefault(); setLogeado(true); }} href="/registro/acceder" className="navItem registroBoton acceder">Acceder</Button>}
            {!logeado && <Button variant="dark" href="/registro/crear-cuenta" className="navItem registroBoton crearCuenta">Crear cuenta</Button>}
            {logeado && <Button variant="dark" onClick={(e) => { e.preventDefault(); setLogeado(false); }} className="navItem registroBoton logoutBoton">Cerrar sesión</Button>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  );
};

export default MenuPrincipal;
