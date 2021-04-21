import { Row, Col, Container } from "react-bootstrap";

const ComoFunciona = () => (
  <Container as="main">
    <Row><Col sm={12} as="h2" className="como-funciona">Cómo funciona?</Col></Row>
    <Row>
      <Col sm={12} as="section" className="d-flex">
        <Row as="li"><Col as="h3" className="tip">Infórmate sobre qué incidencias hay en tu zona</Col></Row>
        <Row as="li"><Col as="h3" className="tip">Regístrate para votar incidencias o regístrarlas tú mismo</Col></Row>
      </Col>
      <Col sm={12} as="section">
        <Row as="h3">¿Quieres registrar una incidencia?</Row>
        <Row as="ul" className="puntoFuncionamiento">
          <Col as="li">Primero comprueba si alguien ya ha reportado esa incidencia. ¿Cómo?</Col>
          <Row as="ul">
            <Col as="li">Localiza la incidencia en el mapa</Col>
            <Col as="li">Consulta el listado de incidencias utilizando filtros o el buscador para encontrar la incidencia</Col>
          </Row>
          <Col as="li">Si la incidencia ya está registrada puedes darle tu voto para mejorar su posicionamiento</Col>
          <Col as="li">Si todavía no está registrada ve al formulario de Nueva incidencia a través del menú de navegación</Col>
          <Col as="li">Consulta Mis incidencias para hacer el seguimiento de las incidencias que hayas registrado</Col>
          <Col as="li">
            Si detectas que una incidencia está duplicada puedes reportarlo en el detalle de la incidencia
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default ComoFunciona;
