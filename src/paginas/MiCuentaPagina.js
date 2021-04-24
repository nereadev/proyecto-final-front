import {
  Button, Col, Container, Row
} from "react-bootstrap";
import { useContext, useEffect } from "react";
import { ContextoUsuario } from "../contextos/ContextoUsuario";

const MiCuentaPagina = () => {
  const { getUsuario } = useContext(ContextoUsuario);
  const usuario = getUsuario.usuario;
  useEffect(() => {
    console.log(usuario);
  }, [usuario]);
  return (
    <Container as="main">
      <Row as="h2">Mi cuenta</Row>
      <Row>
        <Col className="mi-cuenta" as="ul">
          <Row>
            <Col>Nombre:</Col>
            <Col>{(usuario.length !== 0) ? usuario.body.usuario.nombre : ""}</Col>
            <Col />
          </Row>
          <Row>
            <Col>Apellidos:</Col>
            <Col>{(usuario.length !== 0) ? usuario.body.usuario.apellidos : ""}</Col>
            <Col />
          </Row>
          <Row>
            <Col>Email:</Col>
            <Col>{(usuario.length !== 0) ? usuario.body.usuario.email : ""}</Col>
            <Button as={Col} className="modificar-cuenta" type="submit" variant="light">Modificar</Button>
          </Row>
          <Row>
            <Col>Contraseña:</Col>
            <Col>***********</Col>
            <Button as={Col} className="modificar-cuenta" type="submit" variant="light">Modificar</Button>
          </Row>
          <Row>
            <Col>Mis incidencias</Col>
            <Col><a href="./mis-incidencias"><i className="fas fa-plus" aria-label="Mis incidencias" /></a></Col>
            <Col />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MiCuentaPagina;
