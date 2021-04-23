import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ContextoIncidencias } from "../contextos/ContextoIncidencias";

const Incidencia = (props) => {
  const {
    incidenciasFiltro
  } = props;
  const { getIncidencias } = useContext(ContextoIncidencias);
  const incidenciasApi = getIncidencias.incidencias.body.incidencias;
  return (
    <Col>
      {
        incidenciasApi.length !== 0 && (
          incidenciasApi.map(incidencia => (
            <>
              <Row key={incidencia._id} className="incidencia-lista">
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

Incidencia.propTypes = {
  incidenciasFiltro: PropTypes.func.isRequired
};

export default Incidencia;
