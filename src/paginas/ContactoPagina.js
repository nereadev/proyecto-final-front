import {
  Accordion, Card, Button, Row, Col
} from "react-bootstrap";

const ContactoPagina = () => (
  <Row as="main">
    <Col sm={12} as="h2" className="pt-4">Contacto</Col>
    <Col as={Accordion}>
      <Card className="contacto-secciones">
        <Card.Header className="contacto-cabecera">
          <Accordion.Toggle as={Button} variant="link" eventKey="0" className="contacto-boton">
            Quiénes somos
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            Somos Bernat, Malena, Nerea y Santiago y juntos formamos SomDev.
            Con Punto Ciudadano queremos que los ciudadanos y ciudadanas sean
            partícipes de su ciudad. ¡Creando ciudades más limpias y seguras!
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="contacto-secciones">
        <Card.Header className="contacto-cabecera">
          <Accordion.Toggle as={Button} variant="link" eventKey="1" className="contacto-boton">
            ¿Quiéres contactarnos?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Row>
              <Col sm={1} as="a" href="tel:+34656542325"><i className="fas fa-mobile-alt" /></Col>
              <Col sm={5}>Llámanos:</Col>
              <Col sm={5} as="a" href="tel:+34656542325">(+34) 656 542 325</Col>
            </Row>
            {/*  <Row>
              <Col><i className="fas fa-map-marker-alt" /></Col>
              <Col>Visita nuestras oficinas:</Col>
              <Col as="a" href="https://goo.gl/maps/xrGurtUGopDUcz3o7">Aquí!</Col>
            </Row> */}
            <Row>
              <Col
                sm={1}
                as="a"
                href="mailto:puntociudadano@info.com"
              >
                <i className="far fa-envelope" />

              </Col>
              <Col sm={5}>Escríbenos un email:</Col>
              <Col
                sm={5}
                as="a"
                href="mailto:puntociudadano@info.com"
              >
                puntociudadano@info.com

              </Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="contacto-secciones">
        <Card.Header className="contacto-cabecera">
          <Accordion.Toggle as={Button} variant="link" eventKey="2" className="contacto-boton">
            Objetivos de Desarrollo Sostenible
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            El 25 de septiembre de 2015, los líderes mundiales adoptaron un conjunto de objetivos globales para erradicar la pobreza, proteger el planeta y asegurar la prosperidad para todos como parte de una nueva agenda de desarrollo sostenible. Cada objetivo tiene metas específicas que deben alcanzarse en los próximos 15 años.
            Para alcanzar estas metas, todo el mundo tiene que hacer su parte: los gobiernos, el sector privado, la sociedad civil y personas como usted.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="contacto-secciones">
        <Card.Header className="contacto-cabecera">
          <Accordion.Toggle as={Button} variant="link" eventKey="3" className="contacto-boton">
            Ciudades y comunidades sostenibles
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            El mundo cada vez está más urbanizado. Desde 2007, más de la mitad de la población mundial ha estado viviendo en ciudades, y se espera que dicha cantidad aumente hasta el 60 % para 2030.
            Las ciudades y las áreas metropolitanas son centros neurálgicos del crecimiento económico, ya que contribuyen al 60 % aproximadamente del PIB mundial. Sin embargo, también representan alrededor del 70 % de las emisiones de carbono mundiales y más del 60 % del uso de recursos.
            Nuestro compromiso es aportar un grano de arena para lograr el objetivo de crear ciudades más sostenibles.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Col>
  </Row>
);

export default ContactoPagina;
