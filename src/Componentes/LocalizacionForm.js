import { useState } from "react";
import { Col, Form } from "react-bootstrap";

const LocalizacionForm = () => {
  const [marcar, setMarcar] = useState(false);
  const marcarCheck = () => {
    setMarcar(!marcar);
  };
  function geoUsuario() {
    function success(position) {
      const latitud = position.coords.latitude;
      const longitud = position.coords.longitude;
    }
    navigator.geolocation.getCurrentPosition(success);
  }
  return (
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
        <Form.Check type="checkbox" onChange={marcarCheck} label="Introducir datos" />
        <Col className={`introducir-datos ${marcar ? "" : "off"}`}>
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
        <Form.Check type="checkbox" onChange={geoUsuario} label="Usar mi ubicación actual" />
      </Form>
    </>
  );
};

export default LocalizacionForm;
