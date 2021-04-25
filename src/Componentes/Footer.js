import { Row } from "react-bootstrap";
import Copyright from "./Copyright";
import MenuFooter from "./MenuFooter";

const Footer = () => (
  <Row as="footer" className="pie">
    <MenuFooter />
    <Copyright />
  </Row>
);

export default Footer;
