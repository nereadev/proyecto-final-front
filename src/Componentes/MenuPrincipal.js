import { useContext } from "react";
import {
  Col, Button, Nav, Navbar
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ContextoUsuario } from "../contextos/ContextoUsuario";

const MenuPrincipal = () => {
  const { getUsuario: { existeToken, setExisteToken } } = useContext(ContextoUsuario);
  const cerrarSesion = () => {
    localStorage.removeItem("token-usuario");
    setExisteToken(false);
  };
  console.log(existeToken);
  return (
    <Col xs={10} className="navegacion">
      <Navbar expand="lg" className="navegacion">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="menuCabecera">
            <Nav.Link href="/inicio" className="navItem">Mapa / Incidencias</Nav.Link>
            {existeToken && <Nav.Link href="/nueva-incidencia" className="navItem">Nueva Incidencia</Nav.Link>}
            {existeToken && <Nav.Link href="/mis-incidencias" className="navItem"> Mis incidencias</Nav.Link>}
            {existeToken && <Nav.Link href="/nueva-incidencia" className="navItem">Nueva Incidencia</Nav.Link>}
            {existeToken && <Nav.Link href="/mis-incidencias" className="navItem"> Mis incidencias</Nav.Link>}          
            {!existeToken && <Button variant="dark" href="/registro/acceder" className="navItem registroBoton acceder">Acceder</Button>}
            {!existeToken && <Button variant="dark" href="/registro/crear-cuenta" className="navItem registroBoton crearCuenta">Crear cuenta</Button>}
            {existeToken && <Button variant="dark" onClick={cerrarSesion} className="navItem registroBoton logoutBoton">Cerrar sesión</Button>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  );
};

export default MenuPrincipal;
