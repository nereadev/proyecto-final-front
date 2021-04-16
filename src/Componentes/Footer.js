import { Col, Row } from "react-bootstrap";
import MenuFooter from "./MenuFooter";
import logo from "../img/logo.png";

const Footer = () => (
  <Row as="footer" className="pie">
    <Col as="span" className="espacioLogo">
      <img src={logo} alt="Logotipo de SomDev" className="logoWeb" />
    </Col>
    <MenuFooter />
    <Col className="textoFooter">
      <span className="copyright">Aquí irá información del copyright</span>
    </Col>
  </Row>
);

export default Footer;
