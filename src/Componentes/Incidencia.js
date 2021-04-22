import { useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ContextoIncidencias } from "../contextos/ContextoIncidencias";

const Incidencia = () => {
  const { getIncidencias } = useContext(ContextoIncidencias);
  const incidencias = getIncidencias.incidencias;
  return (
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
  );
};

export default Incidencia;
