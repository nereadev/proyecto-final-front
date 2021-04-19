import { useState } from "react";
import {
  Button, ButtonGroup, Col, Overlay, Row
} from "react-bootstrap";

// falta linkar con datosAPI, es una prueba
const pruebaResuelta = false;

const IncidenciaPagina = () => {
  const [info, setInfo] = useState(false);
  const mostrarInfo = () => {
    setInfo(!info);
  };      
  return(
   <>
  <Row as="main">
    <Row as="h2">Incidencia nºX</Row>
     <Col className={`estado-info ${info ? "desactivada" : ""}`}>
        El estado azul indica que la incidencia se ha registrado.
        El estado verde indica que la incidencia se ha gestionado.
      </Col>
      <Row className="detalle-incidencia">
        <Col className="incidencia" as="ul">
          <Row>
            <Col>Estado:</Col>
            <Col>
              <i className={`fas fa-circle
            ${pruebaResuelta ? "incidencia-resuelta" : "incidencia-recibida"}`}
              />
              {" "}
              <Button className="boton-info" variant="light" onClick={() => mostrarInfo()}>?</Button>
            </Col>
          </Row>
          <Row>
            <Col>Nombre:</Col>
            <Col>Este es el Nombre</Col>
          </Row>
          <Row>
            <Col>Descripción:</Col>
            <Col>Esta es la descripción</Col>
          </Row>
          <Row>
            <Col>Fotografía:</Col>
            <Col>Aquí la foto</Col>
          </Row>
          <Row>
            <Col>Tipo:</Col>
            <Col>Medio Ambiente | civismo</Col>
          </Row>
          <Row>
            <Col>Localización:</Col>
            <Col>123.4.566 - 213.123.444</Col>
          </Row>
          <Row>
            <Col>Fecha:</Col>
            <Col>23/01/2021</Col>
          </Row>
          <Row>
            <Col>Favoritos:</Col>
            <Col>
              <i className="fas fa-star" />
              {" "}
              7
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};


export default IncidenciaPagina;
