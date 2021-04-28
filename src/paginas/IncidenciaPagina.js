import { useContext, useEffect, useState } from "react";
// eslint-disable-next-line camelcase
import {
  Button, ButtonGroup, Col, Overlay, Row
} from "react-bootstrap";
import { useParams } from "react-router";
import useFetch from "../utils/hooks/useFetch";

const urlMapbox = (longitud, latitud) => (`${process.env.REACT_APP_API_MAPBOX}${longitud},${latitud}.json?types=address&access_token=${process.env.REACT_APP_TOKEN_MAPBOX}`);

const IncidenciaPagina = () => {
  const getIconCircular = (tipoIncidencia) => `/img/${tipoIncidencia.split(" ").join("-")}-circular.png`;
  const { id: idIncidencia } = useParams();
  const imgUrl = fotoIncidencia => `${process.env.REACT_APP_FIREBOX_URL}${fotoIncidencia}?alt=media`;
  const [incidenciaElegida, setIncidenciaElegida] = useState("");
  const [info, setInfo] = useState(false);
  const fecha = incidenciaElegida ? new Date(incidenciaElegida.registrada).toLocaleDateString() : "";
  const { datos: datosGPS, pideDatos: pideDireccion } = useFetch();
  const { datos: incidencia, pideDatos: pideIncidencia } = useFetch();

  const mostrarInfo = () => {
    setInfo(!info);
  };

  useEffect(() => {
    pideIncidencia(true, `incidencias/${idIncidencia}`);
  }, []);

  useEffect(() => {
    if (incidencia) {
      setIncidenciaElegida(incidencia.body.incidencia);
    }
  }, [incidencia]);

  useEffect(() => {
    if (incidenciaElegida) {
      pideDireccion(false, urlMapbox(incidenciaElegida.longitud, incidenciaElegida.latitud, process.env.REACT_APP_TOKEN_MAPBOX));
    }
  }, [incidenciaElegida]);

  return (
    <Row as="main">
      {
        <>
          <Col>
            <Row as="h2" className="titulo-incidencia">
              {incidenciaElegida.nombre}
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
            ${incidenciaElegida.resuelta ? "incidencia-resuelta" : "incidencia-recibida"}`}
                        />
                        <Button className="boton-info" variant="light" onClick={() => mostrarInfo()}>
                          {" "}
                          {incidenciaElegida.resuelta ? "  Resuelta" : "  Registrada"}
                        </Button>
                      </Col>
                    </Row>
                    <Row as="li" />
                    <Row as="li">
                      <Col sm={3} className="campo">Descripción:</Col>
                      <Col>{incidenciaElegida.descripcion}</Col>
                    </Row>
                    <Row as="li">
                      <Col sm={3} className="campo">Tipo:</Col>
                      <Col>
                        <Row className="elemento-targeta-incidencia tipo-targeta">
                          <img className="carta-tipo-icono" src={incidenciaElegida.tipoIncidencia ? getIconCircular(incidenciaElegida.tipoIncidencia.tipo) : ""} alt="icono tipo de incidencia" />
                          <span>{incidenciaElegida.tipoIncidencia?.tipo.split(" ").map(tipo => tipo.charAt(0).toUpperCase() + tipo.slice(1)).join(" ")}</span>
                        </Row>
                      </Col>
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
                        {/* <i className="fas fa-star" />
                          {" "} */}
                        {incidenciaElegida.votos}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col md={4} className="detalle-imagen">
                <Row className="p-2">
                  <Col as="img" className="img-incidencia" src={incidencia ? imgUrl(incidenciaElegida.fotoIncidencia) : ""} alt={incidenciaElegida.descripcion} />
                </Row>
                <Row as="a" href={imgUrl(incidenciaElegida.fotoIncidencia)} className="pl-4">Ampliar imagen</Row>
              </Col>
            </Row>
          </Col>

        </>
      }
    </Row>
  );
};

export default IncidenciaPagina;
