import {
  Button,
  Col, Form, InputGroup, Row
} from "react-bootstrap";

const AccederForm = () => (
  <>
    <Row as="h2">Registro</Row>
    <Row as="section" className="formulario registro-usuario">
      <Form as={Col} md={6}>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text><i className="far fa-envelope" /></InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            required
            type="text"
            placeholder="Email"
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text><i className="fas fa-asterisk" /></InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            required
            type="text"
            placeholder="Contraseña"
          />
        </InputGroup>
        <Button className="crear-cuenta" type="submit" variant="info">Entrar</Button>
        <Col className="contrasenya" as="a">¿Has olvidado la contraseña?</Col>
        <Col>- o -</Col>
        <Button className="crear-cuenta" type="submit" variant="outline-info">Crear Cuenta</Button>
      </Form>
    </Row>
  </>

);
export default AccederForm;
