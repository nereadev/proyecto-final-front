import { Col, Row, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Copyright = () => (
  <>
    <Col sm={12} className="textoFooter">
      <Nav className="menuFooter">
        <Nav.Item><span className="navItem"> Copyright 2021 © </span></Nav.Item>
        <Nav.Item><span className="navItem">Derechos Reservados</span></Nav.Item>
        <Nav.Item><NavLink to="/contacto" className="navItem">Aviso Legal</NavLink></Nav.Item>
        <Nav.Item><NavLink to="/contacto" className="navItem">Términos de uso</NavLink></Nav.Item>
        <Nav.Item><NavLink to="/contacto" className="navItem">España</NavLink></Nav.Item>
      </Nav>
    </Col>
    <Col as="span" className="espacioLogo">
      <img src="/img/logo.png" alt="Logotipo de SomDev" className="logoWeb" />
    </Col>
  </>
);

export default Copyright;
