import { Row, Col } from "react-bootstrap";
import Copyright from "./Copyright";
import MenuFooter from "./MenuFooter";

const Footer = () => (
  <Row as="footer" className="pie">
    <MenuFooter />
    <Copyright />
    <Col as="span" className="espacioLogo">
      <img src="/img/logo-blanco.png" alt="Logotipo de SomDev" className="logoWeb" />
    </Col>
  </Row>
);

export default Footer;
