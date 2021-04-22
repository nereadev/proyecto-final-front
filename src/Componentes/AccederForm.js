import { useState, useContext, useEffect } from "react";
import {
  Button,
  Col, Form, InputGroup, Row
} from "react-bootstrap";
import { useHistory } from "react-router";
import { ContextoToken } from "../contextos/ContextoToken";
import useFetch from "../utils/hooks/useFetch";

const AccederForm = () => {
  const history = useHistory();
  const [emailInput, setEmailInput] = useState("");
  const [contrasenyaInput, setContrasenyaInput] = useState("");
  const [emailFetch, setEmailFetch] = useState("");
  const [contrasenyaFetch, setContrasenyaFetch] = useState("");
  const { datos: tokenFetch, pideDatos: pideTokenFetch } = useFetch();
  const { existeToken, setExisteToken } = useContext(ContextoToken);
  useEffect(() => {
    if (emailFetch) {
      pideTokenFetch(true, "usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: emailFetch, contrasenya: contrasenyaFetch })
      });
    }
  }, [emailFetch, pideTokenFetch]);
  useEffect(() => {
    if (tokenFetch) {
      if (tokenFetch.error) {
        /* manejar el error */
      } else if (tokenFetch.tokenUsuario) {
        localStorage.setItem("token-usuario", tokenFetch.tokenUsuario);
        setExisteToken(true);
        history.push("/inicio");
      }
    }
  }, [tokenFetch]);
  const irACrearCuenta = () => {
    history.push("/registro/crear-cuenta");
  };
  const checkLoginYToken = () => {
    setEmailFetch(emailInput);
    setContrasenyaFetch(contrasenyaInput);
  };
  const modificaValor = e => {
    e.preventDefault();
    if (e.target.name === "email") {
      setEmailInput(e.target.value);
    } else {
      setContrasenyaInput(e.target.value);
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
              value={emailInput}
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
              value={contrasenyaInput}
              onChange={modificaValor}
            />
          </InputGroup>
          <Button className="crear-cuenta" type="submit" onClick={checkLoginYToken} variant="info">Entrar</Button>
          <Col className="contrasenya" as="a">¿Has olvidado la contraseña?</Col>
          <Col>- o -</Col>
          <Button className="crear-cuenta" type="submit" onClick={irACrearCuenta} variant="outline-info">Crear Cuenta</Button>
        </Form>
      </Row>
    </>
  );
};

export default AccederForm;
