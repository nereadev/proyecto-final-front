import {
  Button, Col, Form, Row, Toast
} from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router";

const IncidenciaForm = (props) => {
  const [ventana, setVentana] = useState(false);
  const history = useHistory();
  const toggleVentana = () => setVentana(!ventana);
  const linkInicio = () => {
    history.push("/mis-incidencias");
  };
  return (
    <>
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
          <Form.File label="(Formato permitido: jpg, jpeg o png | Tamaño máximo 3 Mb)" />
        </Form.Group>
        <Form.Group />
      </Form>
      <Col>
        <Row>
          <Col>
            (2/2)
            {" "}
          </Col>
          <Col />
          <Col>
            <Button className="boton-nueva" variant="info" onClick={toggleVentana}>Registrar</Button>
          </Col>
        </Row>
      </Col>
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
    </>
  );
};

export default IncidenciaForm;
