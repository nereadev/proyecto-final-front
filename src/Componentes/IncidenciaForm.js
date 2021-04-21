import { Col, Form } from "react-bootstrap";
import PropTypes from "prop-types";

const IncidenciaForm = (props) => {
  const { ventana } = props;
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
    </>
  );
};

IncidenciaForm.propTypes = {
  ventana: PropTypes.bool.isRequired
};

export default IncidenciaForm;
