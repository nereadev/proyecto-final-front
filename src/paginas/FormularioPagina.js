import {
  Button, Col, Form, Row
} from "react-bootstrap";
import Cabecera from "../componentes/Cabecera";
import Footer from "../componentes/Footer";

const FormularioPagina = () => (
  <>
    <Cabecera />
    <Row as="h2">Formulario Incidencia</Row>
    <Row as="section" className="formulario incidencia">
      <Form as={Col} md={10}>
        <Form.Group>
          <Form.Label>Nombre Incidencia:</Form.Label>
          <Form.Control
            required
            type="text"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Tipo:</Form.Label>
          <Form.Control as="Select" defaulValue="Elige...">
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
          <Form.Check type="checkbox" label="Introducir datos" />
          <Form.Group>
            <Form.Label className="introducir-datos">Código Postal:</Form.Label>
            <Form.Control
              required
              type="text"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="introducir-datos">Dirección</Form.Label>
            <Form.Control
              required
              type="text"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="introducir-datos">Comentario:</Form.Label>
            <Form.Control as="textarea" />
          </Form.Group>
          <Form.Check type="checkbox" label="Usar ubicación" />
        </Form.Group>
        <Button className="boton-crear" type="submit" variant="info">Registrar</Button>
      </Form>
    </Row>
    <Footer />
  </>
);

export default FormularioPagina;
