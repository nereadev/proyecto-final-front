import { useContext } from "react";
import {
  Col, Button, Nav, Navbar
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ContextoToken } from "../contextos/ContextoToken";

const MenuPrincipal = () => {
  const { existeToken } = useContext(ContextoToken);
  console.log(existeToken);
  return (
    <Col xs={10} className="navegacion">
      <Navbar expand="lg" className="navegacion">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="menuCabecera">
            <NavLink to="/inicio" className="navItem">Mapa / Incidencias</NavLink>
            {existeToken && <NavLink to="/nueva-incidencia" className="navItem">Nueva Incidencia</NavLink>}
            {existeToken && <NavLink to="/mis-incidencias" className="navItem"> Mis incidencias</NavLink>}
            <NavLink to="/como-funciona" className="navItem"> Cómo funciona?</NavLink>
            {existeToken && <NavLink to="/mi-cuenta" className="navItem">Mi cuenta</NavLink>}
            <NavLink to="/contacto" className="navItem">Contacto</NavLink>
            {!existeToken && <Button variant="dark" to="/registro/acceder" className="navItem registroBoton acceder">Acceder</Button>}
            {!existeToken && <Button variant="dark" to="/registro/crear-cuenta" className="navItem registroBoton crearCuenta">Crear cuenta</Button>}
            {existeToken && <Button variant="dark" className="navItem registroBoton logoutBoton">Cerrar sesión</Button>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  );
};

export default MenuPrincipal;
