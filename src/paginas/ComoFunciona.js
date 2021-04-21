import {
  Row, Col
} from "react-bootstrap";

const ComoFunciona = () => (
  <Row as="main">
    <Col sm={12} as="h2" className="como-funciona text-center">Cómo funciona?</Col>
    {/* <Row>
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
    </Row> */}
    <Col>
      <Row as="ul" className="lista-tips list-unstyled">
        <Col sm={4} as="li" className="tips-titulos"><span>Infórmate sobre qué incidencias hay en tu zona</span></Col>
        <Col sm={4} as="li" className="tips-titulos"><span>Regístrate para votar incidencias o regístrarlas tú mismo</span></Col>
        <Col sm={12} as="li" className="tips-titulos"><span>¿Quieres registrar una incidencia?</span></Col>
        <Col sm={12} as="li"><span>1. Primero comprueba si alguien ya ha reportado esa incidencia. ¿Cómo?</span></Col>
        <Col sm={6} as="li"><span>Localiza la incidencia en el mapa</span></Col>
        <Col sm={6} as="li"><span>Consulta el listado de incidencias utilizando filtros o el buscador para encontrar la incidencia</span></Col>
        <Col sm={6} as="li"><span className="mx-4">2. Si la incidencia ya está registrada puedes darle tu voto para mejorar su posicionamiento</span></Col>
        <Col sm={6} as="li"><span className="mx-4">Si todavía no está registrada ve al formulario de Nueva incidencia a través del menú de navegación</span></Col>
        <Col sm={12} as="li"><span>3. Consulta Mis incidencias para hacer el seguimiento de las incidencias que hayas registrado</span></Col>
        <Col sm={12} as="li"><span>Si detectas que una incidencia está duplicada puedes reportarlo en el detalle de la incidencia</span></Col>
      </Row>
    </Col>
  </Row>
);

export default ComoFunciona;
