import {
  Button, Col, Form, Row
} from "react-bootstrap";
import Cabecera from "./Cabecera";
import Footer from "./Footer";

const RegistroCuenta = () => (
  <>
    <Row as="h2">Crea tu cuenta</Row>
    <Row as="section" className="formulario-incidencia">
      <Form as={Col}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Nombre:</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Apellidos:</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" required />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control type="password" required />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Dirección</Form.Label>
          <Form.Control required />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Código Postal:</Form.Label>
            <Form.Control required />
          </Form.Group>
        </Form.Row>
        <Button as={Col} md={3} className="boton-crear" type="submit" variant="info">Registrar</Button>
      </Form>
    </Row>
  </>
);

export default RegistroCuenta;
