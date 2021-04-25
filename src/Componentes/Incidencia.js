import { useContext, useState, useEffect } from "react";
import {
  Button, Col, Image, Row
} from "react-bootstrap";
import { ContextoIncidencias } from "../contextos/ContextoIncidencias";
import { ContextoUsuario } from "../contextos/ContextoUsuario";
import useFetch from "../utils/hooks/useFetch";

const imgPopup = idIncidencia => (`https://firebasestorage.googleapis.com/v0/b/proyecto-final-c019d.appspot.com/o/${idIncidencia}?alt=media`);
const getIconCircular = (tipoIncidencia) => `/img/${tipoIncidencia.split(" ").join("-")}-circular.png`;
const realizaVoto = (incidenciaVotada, usuario, votaIncidencia, dispatchUsuario, dispatchIncidencias) => {
  const token = localStorage.getItem("token-usuario");
  const sumaVoto = !usuario.body.usuario.incidenciasVotadas.find(incidencia => incidencia._id === incidenciaVotada._id);
  votaIncidencia(true, "incidencias/votar", {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ idIncidencia: incidenciaVotada._id })
  });
  dispatchUsuario({
    type: "cambiarVotos",
    incidenciaVotada
  });
  dispatchIncidencias({
    type: "cambiarVotos",
    incidenciaVotada,
    sumaVoto
  });
};

const Incidencia = () => {
  const { dispatch: dispatchIncidencias, getIncidencias } = useContext(ContextoIncidencias);
  const incidencias = getIncidencias.incidencias;
  const { dispatch: dispatchUsuario, getUsuario } = useContext(ContextoUsuario);
  const usuario = getUsuario.usuario;
  const { datos: voto, pideDatos: votaIncidencia } = useFetch();
  useEffect(() => {
    if (usuario.length !== 0) {
      console.log(usuario.body);
    }
  }, [usuario]);
  useEffect(() => {
    if (incidencias.length !== 0) {
      console.log(incidencias.body.incidencias);
    }
  }, [incidencias]);
  return (
    <Col as="section">
      {
        incidencias.length !== 0 && (
          incidencias.body.incidencias.map(incidencia => (
            <Row key={incidencia._id} className="targeta-incidencia">
              <Col sm={2}>
                {
                  usuario.length !== 0 && (
                    <Row className="elemento-targeta-incidencia lateral-targeta-incidencia">
                      <Button onClick={() => realizaVoto(incidencia, usuario, votaIncidencia, dispatchUsuario, dispatchIncidencias)}>
                        <i className={!usuario.body.usuario.incidenciasVotadas.find(incidenciaVotada => incidenciaVotada._id === incidencia._id) ? "fas fa-angle-double-up" : "fas fa-angle-double-down"} />
                      </Button>
                    </Row>
                  )
                }
                <Row className="elemento-targeta-incidencia lateral-targeta-incidencia">{(voto && voto.body.incidencia._id === incidencia._id) ? voto.body.incidencia.votos : incidencia.votos}</Row>
                <Row className="elemento-targeta-incidencia lateral-targeta-incidencia">
                  <i className={`fas fa-circle ${incidencia.resuelta
                    ? "incidencia-resuelta"
                    : "incidencia-recibida"}`}
                  />
                </Row>
              </Col>
              <Col sm={6}>
                <Row as="h3" className="elemento-targeta-incidencia d-block">{incidencia.nombre}</Row>
                {incidencia.descripcion && <Row className="elemento-targeta-incidencia descripcion-targeta">{incidencia.descripcion}</Row>}

                <Row>
                  <Col sm={12}>
                    <Row className="elemento-targeta-incidencia tipo-targeta">
                      <img className="targeta-tipo" src={getIconCircular(incidencia.tipoIncidencia.tipo)} alt="icono tipo de incidencia" />
                      <span>{incidencia.tipoIncidencia.tipo}</span>
                    </Row>
                  </Col>
                  <Col className="elemento-targeta-incidencia direccion-targeta">{incidencia.direccion}</Col>
                  <Col className="elemento-targeta-incidencia direccion-targeta">{new Date(incidencia.registrada).toLocaleDateString()}</Col>
                </Row>
              </Col>
              <Col sm={3} as="img" className="elemento-targeta-incidencia" src={imgPopup(incidencia.fotoIncidencia)} alt=" " />
              <Col sm={1}><a href={`./incidencia/${incidencia._id}`}><i className="fas fa-plus" aria-label="Detalle incidencia" /></a></Col>
            </Row>
          )))
      }
    </Col>
  );
};

export default Incidencia;
