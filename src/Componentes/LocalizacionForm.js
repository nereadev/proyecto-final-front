import { useEffect, useState } from "react";
import {
  Button, Col, Form, Row
} from "react-bootstrap";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import useFetch from "../utils/hooks/useFetch";
import IncidenciaForm from "./IncidenciaForm";

const urlMapboxReverse = (longitud, latitud) => (`${process.env.REACT_APP_API_MAPBOX}${longitud},${latitud}.json?types=address&access_token=${process.env.REACT_APP_TOKEN_MAPBOX}`);
const urlMapbox = direccion => (`${process.env.REACT_APP_API_MAPBOX}${direccion}.json?types=address&access_token=${process.env.REACT_APP_TOKEN_MAPBOX}`);
const getIconCircular = tipoIncidencia => `/img/${tipoIncidencia.split(" ").join("-")}-circular.png`;
const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

const LocalizacionForm = () => {
  const [codigoPostal, setCodigoPostal] = useState("");
  const [direccion, setDireccion] = useState("");
  const formDireccion = direccion ? (`${direccion}, ${codigoPostal}`) : null;
  const [marcar, setMarcar] = useState(false);
  const [marcarGeo, setMarcarGeo] = useState(false);
  const { datos: coordenadas, pideDatos: pideCoordenadas } = useFetch();
  const { datos: datosGeo, statusApi: statusGeo, pideDatos: pideDireccion } = useFetch();
  const { datos: incidenciasSimilares, pideDatos: pideIncidenciasSimilares } = useFetch();
  const [introducirDatos, setintroducirDatos] = useState(false);
  const [direccionGeo, setDireccionGeo] = useState(null);
  const [ocultarIntroducirDatos, setOcultarIntroducirDatos] = useState(true);
  const [activarBoton, setActivarBoton] = useState(false);
  const [muestraIncidencias, setMuestraIncidencias] = useState(false);
  const [incidenciasScroll, setIncidenciasScroll] = useState(null);

  const mostrarDesplegable = e => {
    setintroducirDatos(!introducirDatos);
  };
  const marcarCheck = () => {
    setMarcar(!marcar);
  };
  const marcarCheckGeo = () => {
    setMarcarGeo(!marcarGeo);
  };

  const geoUsuario = () => {
    const success = position => {
      setDireccionGeo({
        latitud: position.coords.latitude,
        longitud: position.coords.longitude
      });
    };
    navigator.geolocation.getCurrentPosition(success);
    setOcultarIntroducirDatos(!ocultarIntroducirDatos);
  };
  const modificaValor = e => {
    e.preventDefault();
    if (e.target.name === "codigo") {
      setCodigoPostal(e.target.value);
    } else {
      setDireccion(e.target.value);
    }
  };
  const cambiarBoton = () => {
    setActivarBoton(!activarBoton);
  };
  const fetchIncidenciasSimilares = () => {
    let coordenadasFetch = 0;
    if (marcarGeo) {
      coordenadasFetch = direccionGeo;
    } else if (marcar) {
      coordenadasFetch = {
        latitud: coordenadas.features[0].geometry.coordinates[1],
        longitud: coordenadas.features[0].geometry.coordinates[0]
      };
    }
    pideIncidenciasSimilares(true, "incidencias/similares", false, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        coordenadas: coordenadasFetch
      })
    });
  };

  useEffect(() => {
    if (marcarGeo) {
      fetchIncidenciasSimilares();
    } else if (marcar) {
      fetchIncidenciasSimilares();
    }
  }, [statusGeo, coordenadas?.features]);

  useEffect(() => {
    if (direccion) {
      pideCoordenadas(false, urlMapbox(direccion));
    }
  }, [direccion]);
  useEffect(() => {
    if (direccionGeo) {
      pideDireccion(false, urlMapboxReverse(direccionGeo.longitud, direccionGeo.latitud));
    }
  }, [direccionGeo]);
  useEffect(() => {
    if (incidenciasSimilares) {
      setMuestraIncidencias(true);
      setIncidenciasScroll(incidenciasSimilares.body.incidencias);
    }
  }, [incidenciasSimilares]);

  return (
    <>
      {!activarBoton && (
        <Col as="section">
          <p>
            Antes de registrar tu nueva incidencia, por favor comprueba que no haya sido creada por otro usuario.
          </p>
          <Row>
            <Col md={6}>
              <Form className="formulario">
                <Form.Label className="localizacion">Localización:</Form.Label>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    className={`${ocultarIntroducirDatos || "off"}`}
                    onClick={marcarCheck}
                    onChange={mostrarDesplegable}
                    label="Introducir localización manual"
                  />
                </Form.Group>
                <Col className={`introducir-datos ${introducirDatos ? "" : "off"}`}>
                  <Form.Group>
                    <Form.Label>Código Postal:</Form.Label>
                    <Form.Control
                      required
                      name="codigo"
                      type="label"
                      value={codigoPostal}
                      onChange={modificaValor}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                      required
                      name="direccion"
                      type="label"
                      value={direccion}
                      onChange={modificaValor}
                    />
                  </Form.Group>
                </Col>
                <Form.Group>
                  <Form.Check
                    id="formBasic"
                    className={`${introducirDatos && "off"}`}
                    type="checkbox"
                    onChange={geoUsuario}
                    label="Usar mi ubicación actual"
                    onClick={marcarCheckGeo}
                  />
                  <Button
                    className="boton-nueva"
                    variant="info"
                    onClick={cambiarBoton}
                  >
                    <i className="fas fa-arrow-right" />
                    Siguiente
                  </Button>
                </Form.Group>
              </Form>
            </Col>
            {muestraIncidencias && (
              <Col md={6}>
                <Row className="ml-2">
                  ¿Tu incidencia se incluye en esta lista?
                </Row>
                <InfiniteScroll
                  dataLength={incidenciasScroll.length}
                  height={250}
                  className="m-2"
                >
                  {incidenciasScroll.map(incidencia => (
                    <Row key={incidencia._id} className="incidencia-zona">
                      <Col sm={2}>
                        <Row className="elemento-targeta-incidencia lateral-targeta-incidencia">{incidencia.votos}</Row>
                        <Row className="elemento-targeta-incidencia lateral-targeta-incidencia">
                          <i className={`fas fa-circle ${incidencia.resuelta
                            ? "incidencia-resuelta"
                            : "incidencia-recibida"}`}
                          />
                        </Row>
                      </Col>
                      <Col sm={10}>
                        <Row as="h3" className="elemento-targeta-incidencia d-block"><a href={`./incidencia/${incidencia._id}`}>{incidencia.nombre}</a></Row>
                        <Row>
                          <Col sm={12}>
                            <Row className="elemento-targeta-incidencia tipo-targeta">
                              <img className="targeta-tipo" src={getIconCircular(incidencia.tipoIncidencia.tipo)} alt="icono tipo de incidencia" />
                              <span>{incidencia.tipoIncidencia.tipo}</span>
                            </Row>
                          </Col>
                          <Col sm={9} className="elemento-targeta-incidencia direccion-targeta">{incidencia.direccion}</Col>
                          <Col sm={3} className="elemento-targeta-incidencia direccion-targeta">{new Date(incidencia.registrada).toLocaleDateString()}</Col>
                        </Row>
                      </Col>
                    </Row>
                  ))}
                </InfiniteScroll>
              </Col>
            )}
          </Row>
          <span className="numero-pie mt-3">
            1/2
          </span>
        </Col>
      )}
      {activarBoton && <IncidenciaForm direccionGeo={direccionGeo} direccion={formDireccion} coordenadas={coordenadas} datosGeo={datosGeo} />}
    </>
  );
};

export default LocalizacionForm;
