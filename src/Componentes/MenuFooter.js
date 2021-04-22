import { useContext } from "react";
import {
  Col, Nav
} from "react-bootstrap";
import { ContextoToken } from "../contextos/ContextoToken";

const MenuFooter = () => {
  const { existeToken } = useContext(ContextoToken);
  return (
    <Col xs={12}>
      <Nav className="menuFooter">
        <Nav.Item><Nav.Link href="/como-funciona" className="navItem"> Cómo funciona?</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/contacto" className="navItem">Contacto</Nav.Link></Nav.Item>
        {!existeToken && <Nav.Item><Nav.Link href="/registro/acceder" className="navItem">Acceder</Nav.Link></Nav.Item>}
        {!existeToken && <Nav.Item><Nav.Link href="/registro/crear-cuenta" className="navItem">Crear cuenta</Nav.Link></Nav.Item>}
        {existeToken && <Nav.Item><Nav.Link className="navItem">Cerrar sesión</Nav.Link></Nav.Item>}
      </Nav>
    </Col>
  );
};

export default MenuFooter;
