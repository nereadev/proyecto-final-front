// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import {
  Col, Row, Button, Toast
} from "react-bootstrap";
import { ContextoIncidencias } from "../contextos/ContextoIncidencias";
import useFetch from "../utils/hooks/useFetch";

const MisIncidenciasPagina = () => {
  const token = localStorage.getItem("token-usuario");
  const idUsuario = jwt_decode(token).id;
  const imgPopup = idIncidencia => (`https://firebasestorage.googleapis.com/v0/b/proyecto-final-c019d.appspot.com/o/${idIncidencia}?alt=media`);
  const getIconCircular = (tipoIncidencia) => `/img/${tipoIncidencia.split(" ").join("-")}-circular.png`;
  const { getIncidencias } = useContext(ContextoIncidencias);
  const incidencias = getIncidencias.incidencias;
  const setQuery = getIncidencias.setQuery;
  const setQuery2 = getIncidencias.setQuery2;
  const [idIncidencia, setIdIncidencia] = useState("");
  const [ventana, setVentana] = useState(false);
  const toggleVentana = (id) => { setVentana(!ventana); setIdIncidencia(id); };
  const { datos: datosEliminados, pideDatos: deleteDatos } = useFetch();

  useEffect(() => {
    setQuery(false);
    setQuery2(false);
  }, [getIncidencias]);

  const eliminaIncidencia = (idIncidencia) => {
    deleteDatos(true, (`incidencias/${idIncidencia}`), {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }); window.location.reload();
  };

  return (
    <Row as="main">
      <Col as="h2">Mis Incidencias</Col>
      <Col md={12}>
        {
          incidencias.length !== 0 && (
            incidencias.body.incidencias.filter(incidencia => (incidencia.usuarioCreador ? incidencia.usuarioCreador._id === idUsuario : false)).map(incidencia => (
              <>
                <Row className={`targeta-incidencia formulario ${!ventana ? "" : "oculto"} p-3`} key={incidencia._id}>
                  <Col sm={2}>
                    <Row className="elemento-targeta-incidencia lateral-targeta-incidencia">{incidencia.votos}</Row>
                    <Row className="elemento-targeta-incidencia lateral-targeta-incidencia">
                      <i className={`fas fa-circle ${incidencia.resuelta
                        ? "incidencia-resuelta"
                        : "incidencia-recibida"}`}
                      />
                    </Row>
                  </Col>
                  <Col sm={6}>
                    <Row as="h3" className="elemento-targeta-incidencia">{incidencia.nombre}</Row>
                    {incidencia.descripcion && <Row className="elemento-targeta-incidencia descripcion-targeta">{incidencia.descripcion}</Row>}
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
                  <Col sm={1}><a href={`./incidencia/${incidencia._id}`}><i className="fas fa-plus" aria-label="Detalle incidencia" /></a></Col>
                  <Col className="d-flex">
                    <Button className="boton-nueva btn-danger mt-1" type="button" variant="info" onClick={() => toggleVentana(incidencia._id)}>Eliminar Incidencia</Button>
                  </Col>
                </Row>
              </>
            )))
        }
        <Col className="ventana" sm={12}>
          <Toast show={ventana} onClose={toggleVentana}>
            <Toast.Header>
              <i className="fas fa-check-circle mr-2" />
              <strong className="mr-auto">¡Cuidado!</strong>
              <small>cerrar</small>
            </Toast.Header>
            <Toast.Body>¿Está seguro que quiere eliminar esta incidencia?</Toast.Body>
            <Col>
              {" "}
              <Button className="boton-nueva btn-danger btn-sm offset-1" onClick={() => eliminaIncidencia(idIncidencia)} type="button" variant="info">Eliminar</Button>
            </Col>
          </Toast>
        </Col>
      </Col>
    </Row>
  );
};

export default MisIncidenciasPagina;
