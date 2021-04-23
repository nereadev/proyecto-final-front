// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import Listado from "../componentes/Listado";
import { ContextoIncidencias } from "../contextos/ContextoIncidencias";

const MisIncidenciasPagina = () => {
  const token = localStorage.getItem("token-usuario");
  const idUsuario = jwt_decode(token).id;
  const imgPopup = idIncidencia => (`https://firebasestorage.googleapis.com/v0/b/proyecto-final-c019d.appspot.com/o/${idIncidencia}?alt=media`);
  const getIconCircular = (tipoIncidencia) => `/img/${tipoIncidencia.split(" ").join("-")}-circular.png`;
  const { getIncidencias } = useContext(ContextoIncidencias);
  const incidenciasApi = getIncidencias.incidencias.body.incidencias;
  const incidenciaMap = incidenciasApi.find(incidencia => incidencia.usuarioCreador._id === idUsuario);

  return (
    <Col>
      {
        incidenciasApi.length !== 0 && (
          <>
            <Row key={incidenciaMap._id} className="targeta-incidencia">
              <Col sm={2}>
                <Row className="elemento-targeta-incidencia lateral-targeta-incidencia">{incidenciaMap.votos}</Row>
                <Row className="elemento-targeta-incidencia lateral-targeta-incidencia">
                  <i className={`fas fa-circle ${incidenciaMap.resuelta
                    ? "incidencia-resuelta"
                    : "incidencia-recibida"}`}
                  />
                </Row>
              </Col>
              <Col sm={7}>
                <Row as="h3" className="elemento-targeta-incidencia">{incidenciaMap.nombre}</Row>
                <Row className="elemento-targeta-incidencia descripcion-targeta">{incidenciaMap.descripcion}</Row>
                <Row>
                  <Col>
                    <Row className="elemento-targeta-incidencia tipo-targeta">
                      <img className="targeta-tipo" src={getIconCircular(incidenciaMap.tipoIncidencia.tipo)} alt="" />
                      Tipo:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {incidenciaMap.tipoIncidencia.tipo}
                    </Row>
                  </Col>
                  <Col className="elemento-targeta-incidencia direccion-targeta">{incidenciaMap.direccion}</Col>
                  <Col className="elemento-targeta-incidencia direccion-targeta">{new Date(incidenciaMap.registrada).toLocaleDateString()}</Col>
                </Row>
              </Col>
              <Col sm={3} as="img" className="elemento-targeta-incidencia" src={imgPopup(incidenciaMap.fotoIncidencia)} alt=" " />
              <Col><a href="./incidencia/:id"><i className="fas fa-plus" aria-label="Detalle incidencia" /></a></Col>
            </Row>
          </>
        )
      }
    </Col>
  );
};

export default MisIncidenciasPagina;
