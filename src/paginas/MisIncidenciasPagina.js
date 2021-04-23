// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Listado from "../componentes/Listado";
import { ContextoIncidencias } from "../contextos/ContextoIncidencias";

const MisIncidenciasPagina = () => {
  const token = localStorage.getItem("token-usuario");
  const idUsuario = jwt_decode(token).id;
  const imgPopup = idIncidencia => (`https://firebasestorage.googleapis.com/v0/b/proyecto-final-c019d.appspot.com/o/${idIncidencia}?alt=media`);
  const getIconCircular = (tipoIncidencia) => `/img/${tipoIncidencia.split(" ").join("-")}-circular.png`;
  const { getIncidencias } = useContext(ContextoIncidencias);
  const incidencias = getIncidencias.incidencias;

  return (
    <Col>
      {
        incidencias.length !== 0 && (
          incidencias.body.incidencias.filter(incidencia => (incidencia.usuarioCreador ? incidencia.usuarioCreador._id === idUsuario : false)).map(incidencia => (
            <>
              <Row key={incidencia._id} className="targeta-incidencia">
                <Col sm={2}>
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
                  <Row>
                    <Col>
                      <Row className="elemento-targeta-incidencia tipo-targeta">
                        <img className="targeta-tipo" src={getIconCircular(incidencia.tipoIncidencia.tipo)} alt="" />
                        Tipo:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {incidencia.tipoIncidencia.tipo}
                      </Row>
                    </Col>
                    <Col className="elemento-targeta-incidencia direccion-targeta">{incidencia.direccion}</Col>
                    <Col className="elemento-targeta-incidencia direccion-targeta">{new Date(incidencia.registrada).toLocaleDateString()}</Col>
                  </Row>
                </Col>
                <Col sm={3} as="img" className="elemento-targeta-incidencia" src={imgPopup(incidencia.fotoIncidencia)} alt=" " />
                <Col><a href="./incidencia/:id"><i className="fas fa-plus" aria-label="Detalle incidencia" /></a></Col>
              </Row>
            </>
          )))
      }
    </Col>
  );
};

export default MisIncidenciasPagina;
