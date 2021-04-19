import {
  Button, Col, Container, Form, InputGroup, Row
} from "react-bootstrap";
import Cabecera from "../Componentes/Cabecera";
import Footer from "../Componentes/Footer";

const RegistroPagina = () => (
  <>
    <Cabecera />
    <Row as="h2">Registro</Row>
    <Row as="section" className="formulario registro-usuario">
      <Form as={Col} md={6}>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text><i className="far fa-envelope" /></InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            required
            type="text"
            placeholder="Email"
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text><i className="fas fa-asterisk" /></InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            required
            type="text"
            placeholder="Contraseña"
          />
        </InputGroup>
        <Button type="submit" variant="info">Entrar</Button>
        <Col as="a">¿Has olvidado la contraseña?</Col>
        <Col>- o -</Col>
        <Button className="boton-crear" type="submit" variant="outline-info">Crear Cuenta</Button>
      </Form>
    </Row>
    <Footer />
  </>
);

export default RegistroPagina;
