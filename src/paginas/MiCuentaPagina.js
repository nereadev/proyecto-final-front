import {
  Button, Col, Row
} from "react-bootstrap";
import { useContext } from "react";
import { ContextoUsuario } from "../contextos/ContextoUsuario";

const MiCuentaPagina = () => {
  const { getUsuario } = useContext(ContextoUsuario);
  const usuario = getUsuario.usuario;

  return (
    <Row as="main">
      <Col as="h2" className="text-center">Mi Cuenta</Col>
      <Col sm={11} className="mi-cuenta" as="ul">
        <Row as="li">
          <Col sm={3} className="etiqueta">Nombre:</Col>
          <Col>{(usuario.length !== 0) ? usuario.body.usuario.nombre : ""}</Col>
        </Row>
        <Row as="li">
          <Col sm={3} className="etiqueta">Apellidos:</Col>
          <Col>{(usuario.length !== 0) ? usuario.body.usuario.apellidos : ""}</Col>
        </Row>
        <Row as="li">
          <Col sm={3} className="etiqueta">Email:</Col>
          <Col>{(usuario.length !== 0) ? usuario.body.usuario.email : ""}</Col>
          <Col sm={2} className="modificar-cuenta"><Button variant="light">Modificar</Button></Col>
        </Row>
        <Row as="li">
          <Col sm={3} className="etiqueta">Contraseña:</Col>
          <Col>***********</Col>
          <Col sm={2} className="modificar-cuenta"><Button variant="light">Modificar</Button></Col>
        </Row>
        <Row as="li">
          <Col sm={3} className="etiqueta">Mis incidencias</Col>
          <Col><a href="./mis-incidencias"><i className="fas fa-plus" aria-label="Mis incidencias" /></a></Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MiCuentaPagina;
