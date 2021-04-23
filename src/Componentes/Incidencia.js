import { useContext, useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ContextoIncidencias } from "../contextos/ContextoIncidencias";
import { ContextoUsuario } from "../contextos/ContextoUsuario";

const Incidencia = () => {
  const imgPopup = idIncidencia => (`https://firebasestorage.googleapis.com/v0/b/proyecto-final-c019d.appspot.com/o/${idIncidencia}?alt=media`);
  const getIconCircular = (tipoIncidencia) => `/img/${tipoIncidencia.split(" ").join("-")}-circular.png`;
  /* Este realizaVoto realmente si se puede triggear sin token, ya que sin hace cerrar sesion estando
  aqui aun le saldra el botoncito, asi haz fetch solo si existe token (aunque realmente sino no creo
  que pasara nada, seguramente saldria lo de las credenciales erroneas) */
  const realizaVoto = () => console.log("hola");
  const { getIncidencias } = useContext(ContextoIncidencias);
  const incidencias = getIncidencias.incidencias;
  const { getUsuario } = useContext(ContextoUsuario);
  const usuario = getUsuario.usuario;
  useEffect(() => {
    if (usuario.length !== 0) {
      console.log(usuario.body.usuario.incidenciasVotadas);
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
                      <Button onClick={realizaVoto}><i className={usuario.body.usuario.incidenciasVotadas.includes(incidencia._id) ? "fas fa-angle-double-down" : "fas fa-angle-double-up"} /></Button>
                    </Row>
                  )
                }
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
          )))
      }
    </Col>
  );
};

export default Incidencia;
