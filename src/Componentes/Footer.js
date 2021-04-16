import { Col, Row } from "react-bootstrap";
import MenuFooter from "./MenuFooter";
import logo from "../img/logo.png";

const Footer = () => (
  <Row as="footer" className="pie">
    <MenuFooter />
    <Col sm={12} className="textoFooter">
      <span className="copyright">Aquí irá información del copyright</span>
    </Col>
    <Col as="span" className="espacioLogo">
      <img src={logo} alt="Logotipo de SomDev" className="logoWeb" />
    </Col>
  </Row>
);

export default Footer;
