import { useContext } from "react";
import {
  Col, Button, Nav, Navbar
} from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { ContextoToken } from "../contextos/ContextoToken";
import useSesion from "../utils/hooks/useSesion";

const MenuPrincipal = () => {
  const history = useHistory();
  const { existeToken } = useContext(ContextoToken);
  const cerrarSesion = useSesion();

  const irA = e => {
    e.preventDefault();
    if (e.target.value === "acceder") {
      history.push("/registro/acceder");
    } else {
      history.push("/registro/crear-cuenta");
    }
  };

  return (
    <Col xs={8} className="navegacion">
      <Navbar expand="xl" className="navegacion">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
        <Navbar.Collapse id="basic-navbar-nav" className="toggle2">
          <Nav className="menuCabecera">
            <NavLink to="/inicio" className="navItem">Inicio</NavLink>
            {existeToken && <NavLink to="/nueva-incidencia" className="navItem">Nueva Incidencia</NavLink>}
            {existeToken && <NavLink to="/mis-incidencias" className="navItem"> Mis Incidencias</NavLink>}
            <NavLink to="/como-funciona" className="navItem"> ¿Cómo Funciona?</NavLink>
            {existeToken && <NavLink to="/mi-cuenta" className="navItem">Mi Cuenta</NavLink>}
            <NavLink to="/contacto" className="navItem">Contacto</NavLink>
            {!existeToken && <Button variant="dark" onClick={irA} value="acceder" className="navItem registroBoton acceder">Acceder</Button>}
            {!existeToken && <Button variant="dark" onClick={irA} value="crear-cuenta" className="navItem registroBoton crearCuenta">Crear Cuenta</Button>}
            {existeToken && <Button variant="dark" onClick={cerrarSesion} className="navItem registroBoton logoutBoton">Cerrar Sesión</Button>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  );
};

export default MenuPrincipal;
