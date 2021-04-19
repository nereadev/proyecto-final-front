import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

// falta linkar con datosAPI, es una prueba
const pruebaResuelta = false;

const Incidencia = () => (
  <Row className="incidencia-lista">
    <Col>1</Col>
    <Col>
      <i className={`fas fa-circle
      ${pruebaResuelta ? "incidencia-resuelta" : "incidencia-recibida"}`}
      />
    </Col>
    <Col>Árbol caído</Col>
    <Col>Medio Ambiente</Col>
    <Col>08021</Col>
    <Col>7</Col>
    <Col><a href="./incidencia/:id"><i className="fas fa-plus" aria-label="Detalle incidencia" /></a></Col>
  </Row>
);

export default Incidencia;
