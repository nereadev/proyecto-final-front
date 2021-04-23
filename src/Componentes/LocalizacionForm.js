import { useState } from "react";
import {
  Button, Col, Form, Row
} from "react-bootstrap";
import { useHistory } from "react-router";
import IncidenciaForm from "./IncidenciaForm";
import Listado from "./Listado";

const LocalizacionForm = () => {
  const [marcar, setMarcar] = useState(false);
  const [introducirDatos, setintroducirDatos] = useState(false);
  const [lista, setLista] = useState(false);
  const [direccionGeo, setDireccionGeo] = useState({});
  const [ocultarIntroducirDatos, setOcultarIntroducirDatos] = useState(true);
  const [siguiente, setSiguiente] = useState(false);
  const [activarBoton, setActivarBoton] = useState(false);
  const history = useHistory();
  const mostrarDesplegable = (e) => {
    if (e.target.checked) {
      setintroducirDatos(!introducirDatos);
    } else {
      setintroducirDatos(!introducirDatos);
    }
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
  const mostrarLista = () => {
    setLista(!lista);
  };
  const mostrarBotonSiguiente = () => {
    setSiguiente(!siguiente);
  };
  const cambiarBoton = () => {
    setActivarBoton(!activarBoton);
  };
  const linkInicio = () => {
    history.push("/inicio");
  };
  return (
    <>
      {!activarBoton
        ? (
          <>
            <Form className="formulario" as={Col} md={10}>
              <p>
                Antes de registrar tu nueva incidencia, por favor comprueba que ya
                {" "}
                <strong>no</strong>
                {" "}
                haya sido creada por otro usuario.
              </p>
              <Form.Label>Localización:</Form.Label>
              <Form.Check
                className={`${ocultarIntroducirDatos || "off"}`}
                type="checkbox"
                onClick={marcarCheck}
                onChange={mostrarDesplegable}
                label="Introducir localización manual"
              />
              <Col className={`introducir-datos ${introducirDatos ? "" : "off"}`}>
                <Form.Group>
                  <Form.Label>Código Postal:</Form.Label>
                  <Form.Control
                    required
                    type="text"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    required
                    type="text"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Comentario:</Form.Label>
                  <Form.Control as="textarea" />
                </Form.Group>
              </Col>
              <Form.Check
                className={`${introducirDatos && "off"}`}
                type="checkbox"
                onClick={marcarCheck}
                onChange={geoUsuario}
                label="Usar mi ubicación actual"
              />
              <Col className={`${marcar ? "" : "off"}`}>
                <Button variant="outline-danger" onClick={mostrarLista}>Comprobar</Button>
                <Col className={`${lista || "off"}`}>
                  <Listado />
                  <Row className="comprobar-incidencia">
                    ¿Has visto tu incidencia?
                    <Button variant="light" onClick={linkInicio}>Sí</Button>
                    /
                    <Button variant="light" onClick={mostrarBotonSiguiente}>No</Button>
                  </Row>
                </Col>
              </Col>
            </Form>
            <Col>
              <Row className="footer-nueva-incidencia">
                <Col>(1/2)</Col>
                <Col />
                <Col>
                  <Button
                    className="boton-nueva"
                    variant="info"
                    disabled={!siguiente}
                    onClick={cambiarBoton}
                  >
                    <i className="fas fa-arrow-right" />
                    {" "}
                    Siguiente
                  </Button>
                </Col>
              </Row>
            </Col>
          </>
        )
        : <IncidenciaForm direccionGeo={direccionGeo} />}
    </>
  );
};

export default LocalizacionForm;
