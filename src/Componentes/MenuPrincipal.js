import { useState } from "react";
import {
  Col, Button, Nav, Navbar, NavLink
} from "react-bootstrap";

const MenuPrincipal = () => {
  const [logeado, setLogeado] = useState(false);
  return (
    <Col xs={10} className="navegacion">
      <Navbar expand="lg" className="navegacion">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="menuCabecera">
            <NavLink to="/inicio" className="navItem">Mapa / Incidencias</NavLink>
            {logeado && <NavLink to="/nueva-incidencia" className="navItem">Nueva Incidencia</NavLink>}
            {logeado && <NavLink to="/mis-incidencias" className="navItem"> Mis incidencias</NavLink>}
            <NavLink to="/como-funciona" className="navItem"> Cómo funciona?</NavLink>
            {logeado && <NavLink to="/mi-cuenta" className="navItem">Mi cuenta</NavLink>}
            <NavLink to="/contacto" className="navItem">Contacto</NavLink>
            {!logeado && <Button variant="dark" href="/registro/acceder" className="navItem registroBoton acceder">Acceder</Button>}
            {!logeado && <Button variant="dark" href="/registro/crear-cuenta" className="navItem registroBoton crearCuenta">Crear cuenta</Button>}
            {logeado && <Button variant="dark" className="navItem registroBoton logoutBoton">Cerrar sesión</Button>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  );
};

export default MenuPrincipal;
