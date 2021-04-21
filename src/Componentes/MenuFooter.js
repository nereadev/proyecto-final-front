import { useState } from "react";
import {
  Col, Nav
} from "react-bootstrap";

const MenuFooter = () => {
  const [logeado, setLogeado] = useState(false);
  return (
    <Col xs={12}>
      <Nav className="menuFooter">
        <Nav.Item><Nav.Link href="/como-funciona" className="navItem"> Cómo funciona?</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/contacto" className="navItem">Contacto</Nav.Link></Nav.Item>
        {!logeado && <Nav.Item><Nav.Link href="/registro/acceder" className="navItem">Acceder</Nav.Link></Nav.Item>}
        {!logeado && <Nav.Item><Nav.Link href="/registro/crear-cuenta" className="navItem">Crear cuenta</Nav.Link></Nav.Item>}
        {logeado && <Nav.Item><Nav.Link className="navItem">Cerrar sesión</Nav.Link></Nav.Item>}
      </Nav>
    </Col>
  );
};

export default MenuFooter;
