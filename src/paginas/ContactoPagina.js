import {
  Accordion, Card, Button, Row, Col
} from "react-bootstrap";

const ContactoPagina = () => (
  <Row as="main">
    <Col sm={12} as="h2" className="pt-4">Contacto</Col>
    <Col as={Accordion}>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Quiénes somos
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            Somos Bernat, Malena, Nerea y Santiago y juntos formamos SomDev.
            Con CiutadàVerd queremos que los ciudadanos y ciudadanas sean
            partícipes de su ciudad. ¡Creando ciudades más limpias y seguras!
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            ¿Quiéres contactarnos?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Row>
              <Col><i className="fas fa-mobile-alt" /></Col>
              <Col>Llámanos:</Col>
              <Col>(+34) 656 542 325</Col>
            </Row>
            <Row>
              <Col><i className="fas fa-map-marker-alt" /></Col>
              <Col>Visita nuestras oficinas:</Col>
              <Col>Aquí!</Col>
            </Row>
            <Row>
              <Col><i className="far fa-envelope" /></Col>
              <Col>Escríbenos un email:</Col>
              <Col>ciutadaverd@info.com</Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Col>
  </Row>
);

export default ContactoPagina;
