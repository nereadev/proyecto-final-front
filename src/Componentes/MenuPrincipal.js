import { useContext } from "react";
import {
  Col, Button, Nav, Navbar
} from "react-bootstrap";
import { ContextoUsuario } from "../contextos/ContextoUsuario";

const MenuPrincipal = () => {
  const { getUsuario: { existeToken } } = useContext(ContextoUsuario);
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

            <Nav.Link href="/como-funciona" className="navItem"> Cómo funciona?</Nav.Link>
            {existeToken && <Nav.Link href="/mi-cuenta" className="navItem">Mi cuenta</Nav.Link>}
            <Nav.Link href="/contacto" className="navItem">Contacto</Nav.Link>
            {!existeToken && <Button variant="dark" href="/registro/acceder" className="navItem registroBoton acceder">Acceder</Button>}
            {!existeToken && <Button variant="dark" href="/registro/crear-cuenta" className="navItem registroBoton crearCuenta">Crear cuenta</Button>}
            {existeToken && <Button variant="dark" className="navItem registroBoton logoutBoton">Cerrar sesión</Button>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  );
};

export default MenuPrincipal;
