import {
  Col, Nav
} from "react-bootstrap";

const MenuFooter = () => (
  <Col xs={12}>
    <Nav className="menuFooter">
      <Nav.Item><Nav.Link href="/como-funciona" className="navItem"> Cómo funciona?</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link href="/contacto" className="navItem">Contacto</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link href="/registro" className="navItem">Registro</Nav.Link></Nav.Item>
    </Nav>
  </Col>
);

export default MenuFooter;
