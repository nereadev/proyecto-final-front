import { useContext, useState, useEffect } from "react";
import {
  Button, Col, Image, Row
} from "react-bootstrap";
import { ContextoIncidencias } from "../contextos/ContextoIncidencias";
import { ContextoUsuario } from "../contextos/ContextoUsuario";
import useFetch from "../utils/hooks/useFetch";

const imgPopup = idIncidencia => (`https://firebasestorage.googleapis.com/v0/b/proyecto-final-c019d.appspot.com/o/${idIncidencia}?alt=media`);
const getIconCircular = (tipoIncidencia) => `/img/${tipoIncidencia.split(" ").join("-")}-circular.png`;
const realizaVoto = (incidenciaVotada, usuario, votaIncidencia, dispatch) => {
  const token = localStorage.getItem("token-usuario");
  const sumaVoto = !usuario.body.usuario.incidenciasVotadas.find(incidencia => incidencia._id === incidenciaVotada._id);
  votaIncidencia(true, "incidencias/votar", {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ idIncidencia: incidenciaVotada._id, sumaVoto })
  });
  dispatch({
    type: "cambiarVotos",
    incidenciaVotada,
    sumaVoto
  });
};

const Incidencia = () => {
  const { getIncidencias } = useContext(ContextoIncidencias);
  const incidencias = getIncidencias.incidencias;
  const { dispatch, getUsuario } = useContext(ContextoUsuario);
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
    <Col>
      {
        incidencias.length !== 0 && (
          incidencias.body.incidencias.map(incidencia => (
            <Row key={incidencia._id} className="targeta-incidencia">
              <Col sm={2}>
                {
                  usuario.length !== 0 && (
                    <Row className="elemento-targeta-incidencia lateral-targeta-incidencia">
                      <Button variant="outline-info" onClick={() => realizaVoto(incidencia, usuario, votaIncidencia, dispatch)}>
                        <i className={!usuario.body.usuario.incidenciasVotadas.find(incidenciaVotada => incidenciaVotada._id === incidencia._id) ? "fas fa-angle-double-up" : "fas fa-angle-double-down"} />
                      </Button>
                    </Row>
                  )
                }
                {/* esto de abajo no vale porque el id del voto cambia cada vez que das un voto nuevo,
                lo que tienes que hacer es usar el DISPATCH de incidencias, seteando las incidencias */}
                <Row className="elemento-targeta-incidencia lateral-targeta-incidencia">{(voto && voto.body && voto.body.incidencia._id === incidencia._id) ? voto.body.incidencia.votos : incidencia.votos}</Row>
              </Col>
              <Col sm={7} className="info-general">
                <Row>
                  <Col sm={10} as="h3" className="elemento-targeta-incidencia">{incidencia.nombre}</Col>
                  <Col sm={2} className="icono-mas">
                    <a href={`./incidencia/${incidencia._id}`}>
                      <i className="fas fa-plus" aria-label="Detalle incidencia" />
                    </a>
                  </Col>
                </Row>
                <Row className="info-especifica">
                  <Col dm={1} className="elemento-targeta-incidencia lateral-targeta-incidencia">
                    <i className={`fas fa-circle ${incidencia.resuelta
                      ? "incidencia-resuelta"
                      : "incidencia-recibida"}`}
                    />
                  </Col>
                  <Col dm={3} className="imagen-icono">
                    <img className="targeta-tipo" src={getIconCircular(incidencia.tipoIncidencia.tipo)} alt="" />
                  </Col>
                  <Col dm={4} className="elemento-targeta-incidencia tipo-targeta">
                    {incidencia.tipoIncidencia.tipo}
                  </Col>
                  <Col dm={4} className="elemento-targeta-incidencia direccion-targeta">{new Date(incidencia.registrada).toLocaleDateString()}</Col>
                </Row>
              </Col>
              <Col sm={3} as="img" className="elemento-targeta-incidencia" src={`${incidencia.fotoIncidencia.length > 16 ? imgPopup(incidencia.fotoIncidencia) : "/img/no-foto.png "}`} alt=" " />
            </Row>
          )))
      }
    </Col>
  );
};

export default Incidencia;
