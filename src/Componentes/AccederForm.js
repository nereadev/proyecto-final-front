import { useState } from "react";
import {
  Button,
  Col, Form, InputGroup, Row
} from "react-bootstrap";
import { useHistory } from "react-router";

const AccederForm = () => {
  const history = useHistory();
  const linkCrearCuenta = () => {
    history.push("/registro/crear-cuenta");
  };
  const linkInicio = () => {
    history.push("/inicio");
  };
  const [email, setEmail] = useState("");
  const [contrasenya, setContrasenya] = useState("");
  const modificaValor = e => {
    e.preventDefault();
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setContrasenya(e.target.value);
    }
  };
  return (
    <>
      <Row as="h2">Acceder</Row>
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
              name="email"
              value={email}
              onChange={modificaValor}
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
              name="contraseña"
              value={contrasenya}
              onChange={modificaValor}
            />
          </InputGroup>
          <Button className="crear-cuenta" type="submit" onClick={linkInicio} variant="info">Entrar</Button>
          <Col className="contrasenya" as="a">¿Has olvidado la contraseña?</Col>
          <Col>- o -</Col>
          <Button className="crear-cuenta" type="submit" onClick={linkCrearCuenta} variant="outline-info">Crear Cuenta</Button>
        </Form>
      </Row>
    </>
  );
};

export default AccederForm;
