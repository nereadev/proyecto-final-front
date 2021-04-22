/* eslint-disable no-useless-escape */
import { useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ContextoIncidencias } from "../contextos/ContextoIncidencias";

const imgPopup = idIncidencia => (`https://firebasestorage.googleapis.com/v0/b/proyecto-final-c019d.appspot.com/o/${idIncidencia}?alt=media`);
const getIconCircular = (tipoIncidencia) => `/img/${tipoIncidencia.split(" ").join("-")}-circular.png`;
const hazAlgo = () => console.log("hola");

const Incidencia = () => {
  const { getIncidencias } = useContext(ContextoIncidencias);
  const incidencias = getIncidencias.incidencias;
  return (
    <Col>
      {
        incidencias.length !== 0 && (
          incidencias.body.incidencias.map(incidencia => (
            <>
              <Row key={incidencia._id} className="targeta-incidencia">
                <Col sm={2}>
                  <Row className="elemento-targeta-incidencia lateral-targeta-incidencia">
                    <Button onClick={hazAlgo}><i className="fas fa-angle-double-up" /></Button>
                  </Row>
                  <Row className="elemento-targeta-incidencia lateral-targeta-incidencia">{incidencia.votos}</Row>
                  <Row className="elemento-targeta-incidencia lateral-targeta-incidencia">
                    <i className={`fas fa-circle ${incidencia.resuelta
                      ? "incidencia-resuelta"
                      : "incidencia-recibida"}`}
                    />
                  </Row>
                </Col>
                <Col sm={7}>
                  <Row as="h3" className="elemento-targeta-incidencia">{incidencia.nombre}</Row>
                  <Row className="elemento-targeta-incidencia descripcion-targeta">{incidencia.descripcion}</Row>
                  <Row justify-content-between>
                    <Col>
                      <Row className="elemento-targeta-incidencia tipo-targeta">
                        <img className="targeta-tipo" src={getIconCircular(incidencia.tipoIncidencia.tipo)} alt="" />
                        Tipo:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {incidencia.tipoIncidencia.tipo}
                      </Row>
                    </Col>
                    <Col text-right className="elemento-targeta-incidencia direccion-targeta">{incidencia.direccion}</Col>
                  </Row>
                </Col>
                <Col sm={3} as="img" className="elemento-targeta-incidencia" src={imgPopup(incidencia.fotoIncidencia)} alt=" " />
              </Row>
            </>
          )))
      }
    </Col>
  );
  /* return (
    <Col>
      {
        incidencias.length !== 0 && (
          incidencias.body.incidencias.map(incidencia => (
            <>
              <Row className="incidencia-lista">
                <Col>{incidencia._id}</Col>
                <Col>
                  <i className={`fas fa-circle ${incidencia.resuelta
                    ? "incidencia-resuelta"
                    : "incidencia-recibida"}`}
                  />
                </Col>
                <Col>{incidencia.nombre}</Col>
                <Col>{incidencia.tipoIncidencia.tipo}</Col>
                <Col>{incidencia.codigoPostal}</Col>
                <Col>{incidencia.votos}</Col>
                <Col><a href="./incidencia/:id"><i className="fas fa-plus" aria-label="Detalle incidencia" /></a></Col>
              </Row>
            </>
          )))
      }
    </Col>
  ); */
};

export default Incidencia;
