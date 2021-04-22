import { useState } from "react";
import {
  Button, Col, Form, Row
} from "react-bootstrap";
import IncidenciaForm from "./IncidenciaForm";

const LocalizacionForm = () => {
  const [marcar, setMarcar] = useState(false);
  const [introducirDatos, setintroducirDatos] = useState(false);
  const [lista, setLista] = useState(false);
  const [ocultarIntroducirDatos, setOcultarIntroducirDatos] = useState(true);
  const [siguiente, setSiguiente] = useState(false);
  const [activarBoton, setActivarBoton] = useState(false);
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
  function geoUsuario() {
    function success(position) {
      const latitud = position.coords.latitude;
      const longitud = position.coords.longitude;
    }
    navigator.geolocation.getCurrentPosition(success);
    setOcultarIntroducirDatos(!ocultarIntroducirDatos);
  }
  const mostrarLista = () => {
    setLista(!lista);
  };
  const mostrarBotonSiguiente = () => {
    setSiguiente(!siguiente);
  };
  const cambiarBoton = () => {
    setActivarBoton(!activarBoton);
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
                label="Introducir Datos"
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
                  <Row>aquí va la lista</Row>
                  <Row>
                    ¿Has visto tu incidencia?
                    <Button variant="light">Sí</Button>
                    /
                    <Button variant="light" onClick={mostrarBotonSiguiente}>No</Button>
                  </Row>
                </Col>
              </Col>
            </Form>
            <Col>
              <Row>
                <Col>(1/2)</Col>
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
        : <IncidenciaForm />}
    </>
  );
};

export default LocalizacionForm;
