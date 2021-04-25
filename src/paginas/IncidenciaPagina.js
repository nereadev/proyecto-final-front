import { useContext, useEffect, useState } from "react";
// eslint-disable-next-line camelcase
import {
  Button, ButtonGroup, Col, Overlay, Row
} from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ContextoToken } from "../contextos/ContextoToken";
import useFetch from "../utils/hooks/useFetch";

const token = "pk.eyJ1IjoiYmVybmF0anYiLCJhIjoiY2tub2o2emxzMWVweTJxbnhicGxiejRvOCJ9.x-GGbqA5iOhR66FnJ4DWnw";
const urlMapbox = (longitud, latitud, token) => (`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitud},${latitud}.json?types=address&access_token=${token}`);

const IncidenciaPagina = () => {
  const { id } = useParams();
  const imgUrl = idIncidencia => (`https://firebasestorage.googleapis.com/v0/b/proyecto-final-c019d.appspot.com/o/${idIncidencia}?alt=media`);
  const [incidenciaElegida, setIncidenciaElegida] = useState("");
  const { existeToken } = useContext(ContextoToken);
  const [info, setInfo] = useState(false);
  const fecha = incidenciaElegida ? new Date(incidenciaElegida.registrada).toLocaleDateString() : "";
  const { datos: datosGPS, pideDatos: pideDireccion } = useFetch();
  console.log(incidenciaElegida);
  useEffect(() => {
    if (incidenciaElegida) {
      pideDireccion(false, urlMapbox(incidenciaElegida.longitud, incidenciaElegida.latitud, token));
    }
  }, [incidenciaElegida]);

  const mostrarInfo = () => {
    setInfo(!info);
  };
  const { datos: incidencia, pideDatos: pideIncidencia } = useFetch();
  useEffect(() => {
    if (existeToken) {
      const token = localStorage.getItem("token-usuario");
      pideIncidencia(true, `incidencias/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    }
  }, [existeToken]);
  useEffect(() => {
    if (incidencia) {
      setIncidenciaElegida(incidencia.body.incidencia);
    }
  }, [incidencia]);

  return (
    <Row as="main">
      { existeToken
        ? (
          <>
            <Col>
              <Row as="h2">
                Incidencia N°
                {" "}
                {incidenciaElegida ? incidenciaElegida._id.slice(0, 3) : ""}
              </Row>
              <Row className="carta-incidencia">
                <Col md={8}>
                  <Row className={`estado-info ${info ? "" : "desactivada"}`}>
                    El estado azul indica que la incidencia se ha registrado.
                    El estado verde indica que la incidencia se ha gestionado.
                  </Row>
                  <Row className="detalle-incidencia">
                    <Col className="incidencia" as="ul">
                      <Row as="li">
                        <Col sm={3} className="campo">
                          Estado:
                        </Col>
                        <Col>
                          <i className={`fas fa-circle
            ${incidenciaElegida.resulta ? "incidencia-resuelta" : "incidencia-recibida"}`}
                          />
                          <Button className="boton-info" variant="light" onClick={() => mostrarInfo()}>
                            {" "}
                            {incidenciaElegida.resuelta !== true ? "  Registrada" : "  Resuelta"}
                          </Button>
                        </Col>
                      </Row>
                      <Row as="li">
                        <Col sm={3} className="campo">
                          Nombre:
                        </Col>
                        <Col>
                          {incidenciaElegida.nombre}
                        </Col>
                      </Row>
                      <Row as="li">
                        <Col sm={3} className="campo">Descripción:</Col>
                        <Col>{incidenciaElegida.descripcion}</Col>
                      </Row>
                      <Row as="li">
                        <Col sm={3} className="campo">Tipo:</Col>
                        <Col>{incidenciaElegida.tipoIncidencia?.tipo.toUpperCase()}</Col>
                      </Row>
                      <Row as="li">
                        <Col sm={3} className="campo">Localización:</Col>
                        <Col>{datosGPS ? datosGPS.features[0].place_name : incidenciaElegida.direccion}</Col>
                      </Row>
                      <Row as="li">
                        <Col sm={3} className="campo">Fecha:</Col>
                        <Col>{fecha}</Col>
                      </Row>
                      <Row as="li">
                        <Col sm={3} className="campo">Votos:</Col>
                        <Col>
                          <i className="fas fa-star" />
                          {" "}
                          7
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col md={4} className="detalle-imagen">
                  <Row className="p-2">
                    <Col as="img" src={incidencia ? imgUrl(incidenciaElegida.fotoIncidencia) : ""} alt={incidenciaElegida.descripcion} />
                  </Row>
                  <Row as="a" href={imgUrl(incidenciaElegida.fotoIncidencia)} className="pl-4">Ampliar imagen</Row>
                </Col>
              </Row>
            </Col>

          </>
        ) : <h5>Uppss... Para ver esta incidencia debes estar registrado con nosotros!</h5>}
    </Row>
  );
};

export default IncidenciaPagina;
