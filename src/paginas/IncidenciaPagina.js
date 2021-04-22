import { useContext, useEffect, useState } from "react";
// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import {
  Button, ButtonGroup, Col, Overlay, Row
} from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ContextoUsuario } from "../contextos/ContextoUsuario";
import useFetch from "../utils/hooks/useFetch";

const token = "pk.eyJ1IjoiYmVybmF0anYiLCJhIjoiY2tub2o2emxzMWVweTJxbnhicGxiejRvOCJ9.x-GGbqA5iOhR66FnJ4DWnw";
const urlMapbox = (longitud, latitud, token) => (`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitud},${latitud}.json?types=address&access_token=${token}`);

const IncidenciaPagina = () => {
  const { id } = useParams();
  const imgUrl = idIncidencia => (`https://firebasestorage.googleapis.com/v0/b/proyecto-final-c019d.appspot.com/o/${idIncidencia}?alt=media`);
  const [incidenciaElegida, setIncidenciaElegida] = useState("");
  const { getUsuario: { existeToken } } = useContext(ContextoUsuario);
  const [info, setInfo] = useState(false);
  const fecha = incidenciaElegida ? new Date(incidenciaElegida.registrada).toLocaleDateString() : "";
  const { datos: datosGPS, pideDatos: pideDireccion } = useFetch();

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
      <Col>
        <Row as="h2">
          Incidencia N°
          {" "}
          {incidenciaElegida ? incidenciaElegida._id.slice(0, 3) : ""}
        </Row>
        <Col className={`estado-info ${info ? "" : "desactivada"}`}>
          El estado azul indica que la incidencia se ha registrado.
          El estado verde indica que la incidencia se ha gestionado.
        </Col>
        <Row className="detalle-incidencia">
          <Col className="incidencia" as="ul">
            <Row>
              <Col>
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
            <Row>
              <Col>
                Nombre:
              </Col>
              <Col>
                {incidenciaElegida.nombre}
              </Col>
            </Row>
            <Row>
              <Col>Descripción:</Col>
              <Col>{incidenciaElegida.descripcion}</Col>
            </Row>
            <Row>
              <Col>Tipo:</Col>
              <Col>{incidenciaElegida.tipoIncidencia?.tipo}</Col>
            </Row>
            <Row>
              <Col>Localización:</Col>
              <Col>{datosGPS?.features[0].place_name}</Col>
            </Row>
            <Row>
              <Col>Fecha:</Col>
              <Col>{fecha}</Col>
            </Row>
            <Row>
              <Col>Votos:</Col>
              <Col>
                <i className="fas fa-star" />
                {" "}
                7
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col as="img" src={incidencia ? imgUrl(incidenciaElegida.fotoIncidencia) : ""} alt={incidenciaElegida.descripcion} />
          <Col as="a" href={imgUrl(incidenciaElegida.fotoIncidencia)} className="text-right">ampliar imagen</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default IncidenciaPagina;
