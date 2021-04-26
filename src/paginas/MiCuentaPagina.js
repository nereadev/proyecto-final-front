import {
  Button, Col, Row
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
    <Row as="main">
      <Col as="h2">Mi Cuenta</Col>
      <Col md={12} className="mi-cuenta" as="ul">
        <Row>
          <Col>Nombre:</Col>
          <Col className="mx-4">{(usuario.length !== 0) ? usuario.body.usuario.nombre : ""}</Col>
          <Col />
        </Row>
        <Row>
          <Col>Apellidos:</Col>
          <Col className="mx-4">{(usuario.length !== 0) ? usuario.body.usuario.apellidos : ""}</Col>
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
          <Col as={Button} className="modificar-cuenta" type="submit" variant="light">Modificar</Col>
        </Row>
        <Row>
          <Col>Mis incidencias</Col>
          <Col className="mx-4"><a href="./mis-incidencias"><i className="fas fa-plus" aria-label="Mis incidencias" /></a></Col>
          <Col />
        </Row>
      </Col>
    </Row>
  );
};

export default MiCuentaPagina;
