import { useContext } from "react";
import {
  Col, Nav
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ContextoToken } from "../contextos/ContextoToken";

const MenuFooter = () => {
  const { existeToken } = useContext(ContextoToken);
  return (
    <Col xs={12}>
      <Nav className="menuFooter">
        <Nav.Item><NavLink to="/como-funciona" className="navItem"> Cómo funciona?</NavLink></Nav.Item>
        <Nav.Item><NavLink to="/contacto" className="navItem">Contacto</NavLink></Nav.Item>
        {!existeToken && <Nav.Item><NavLink to="/registro/acceder" className="navItem">Acceder</NavLink></Nav.Item>}
        {!existeToken && <Nav.Item><NavLink to="/registro/crear-cuenta" className="navItem">Crear cuenta</NavLink></Nav.Item>}
        {existeToken && <Nav.Item><NavLink className="navItem">Cerrar sesión</NavLink></Nav.Item>}
      </Nav>
    </Col>
  );
};

export default MenuFooter;
