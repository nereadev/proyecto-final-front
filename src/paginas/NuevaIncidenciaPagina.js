import { useState } from "react";
import {
  Button, Col, Form, Row, Toast
} from "react-bootstrap";
import { useHistory } from "react-router";

const NuevaIncidenciaPagina = () => {
  const [ventana, setVentana] = useState(false);
  const [marcar, setMarcar] = useState(false);
  const history = useHistory();
  const toggleVentana = () => setVentana(!ventana);
  const marcarCheck = () => {
    setMarcar(!marcar);
  };
  const linkInicio = () => {
    history.push("/mis-incidencias");
  };
  return (
    <Row as="main">
      <Col>
        <Row as="h2">Formulario Incidencia</Row>
        <Row as="section" className="nueva-incidencia">
          <Form className={`formulario ${!ventana ? "" : "oculto"}`} as={Col} md={10}>
            <Form.Group>
              <Form.Label>Nombre Incidencia:</Form.Label>
              <Form.Control
                required
                type="text"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tipo:</Form.Label>
              <Form.Control as="select">
                <option>Elige...</option>
                <option>Medio Ambiente</option>
                <option>Civismo</option>
                <option>Infraestrucutra</option>
                <option>Otros:</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripción:</Form.Label>
              <Form.Control as="textarea" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Fotografía:</Form.Label>
              <Form.File label="(Formato perimitido: jpng .png | Tamaño 3 Mb)" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Localización:</Form.Label>
              <Form.Check type="checkbox" label="Introducir datos" onChange={marcarCheck} />
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
              <Form.Check type="checkbox" label="Usar ubicación" />
            </Form.Group>
            <Button className="boton-crear" type="submit" variant="info" onClick={toggleVentana}>Registrar</Button>
          </Form>
          <Col className="ventana" sm={12}>
            <Toast show={ventana} onClose={linkInicio}>
              <Toast.Header>
                <i className="fas fa-check-circle mr-2" />
                <strong className="mr-auto">Incidencia Registrada</strong>
                <small>cerrar</small>
              </Toast.Header>
              <Toast.Body>La nueva incidencia se ha enviado correctamente.</Toast.Body>
            </Toast>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default NuevaIncidenciaPagina;
