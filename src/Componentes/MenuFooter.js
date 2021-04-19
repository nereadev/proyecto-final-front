import {
  Col, Nav
} from "react-bootstrap";
import MenuPrincipal from "./MenuPrincipal";

const MenuFooter = () => (
  <Col xs={12}>
    <Nav className="navMenu">
      <Nav.Item className="navLista"><Nav.Link href="/como-funciona" className="navItem"> Cómo funciona?</Nav.Link></Nav.Item>
      <Nav.Item className="navLista"><Nav.Link href="/contacto" className="navItem">Contacto</Nav.Link></Nav.Item>
      <Nav.Item className="navLista"><Nav.Link href="/registro" className="navItem">Registro</Nav.Link></Nav.Item>
    </Nav>
  </Col>
);

export default MenuFooter;
