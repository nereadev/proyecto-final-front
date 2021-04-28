import { useEffect, useState } from "react";
import {
  Button, Col, Form, Row
} from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import useFetch from "../utils/hooks/useFetch";
import IncidenciaForm from "./IncidenciaForm";

const LocalizacionForm = () => {
  const urlMapboxReverse = (longitud, latitud) => (`${process.env.REACT_APP_API_MAPBOX}${longitud},${latitud}.json?types=address&access_token=${process.env.REACT_APP_TOKEN_MAPBOX}`);
  const urlMapbox = direccion => (`${process.env.REACT_APP_API_MAPBOX}${direccion}.json?types=address&access_token=${process.env_REACT_APP_TOKEN_MAPBOX}`);
  const [codigoPostal, setCodigoPostal] = useState("");
  const [direccion, setDireccion] = useState("");
  const formDireccion = direccion ? (`${direccion}, ${codigoPostal}`) : null;
  const [marcar, setMarcar] = useState(false);
  const { datos: coordenadas, pideDatos: pideCoordenadas } = useFetch();
  const { datos: datosGeo, pideDatos: pideDireccion } = useFetch();
  const [introducirDatos, setintroducirDatos] = useState(false);
  const [direccionGeo, setDireccionGeo] = useState(null);
  const [ocultarIntroducirDatos, setOcultarIntroducirDatos] = useState(true);
  const [activarBoton, setActivarBoton] = useState(false);
  const mostrarDesplegable = (e) => {
    setintroducirDatos(!introducirDatos);
  };
  const marcarCheck = () => {
    setMarcar(!marcar);
  };
  const geoUsuario = () => {
    const success = (position) => {
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
  useEffect(() => {
    if (direccion) {
      pideCoordenadas(false, urlMapbox(direccion));
    }
  }, [direccion]);
  useEffect((e) => {
    if (direccionGeo) {
      pideDireccion(false, urlMapboxReverse(direccionGeo.longitud, direccionGeo.latitud));
    }
  }, [direccionGeo]);
  return (
    <>
      {!activarBoton && (
        <Col as="section">
          <p>
            Antes de registrar tu nueva incidencia, por favor comprueba que no haya sido creada por otro usuario.
            <Link to="/inicio" className="importante">¡Compruébalo aquí!</Link>
          </p>
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
                onClick={marcarCheck}
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
          <span className="numero-pie">
            1/2
          </span>
        </Col>
      )}
      {activarBoton && <IncidenciaForm direccionGeo={direccionGeo} direccion={formDireccion} coordenadas={coordenadas} datosGeo={datosGeo} />}
    </>
  );
};

export default LocalizacionForm;
