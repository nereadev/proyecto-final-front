import {
  Button, Col, Container, Form, InputGroup, Row
} from "react-bootstrap";
import { useParams } from "react-router";
import RegistroCuenta from "../componentes/RegistroCuenta";

const RegistroPagina = () => {
  const { accion } = useParams();
  return (
    <Row as="main">
      {accion === "acceder"
        ? (
          <>
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
                <Button className="crear-cuenta" type="submit" variant="info">Entrar</Button>
                <Col className="contrasenya" as="a">¿Has olvidado la contraseña?</Col>
                <Col>- o -</Col>
                <Button className="crear-cuenta" type="submit" variant="outline-info">Crear Cuenta</Button>
              </Form>
            </Row>
          </>
        )
        : <RegistroCuenta />}
    </Row>
  );
};

export default RegistroPagina;
