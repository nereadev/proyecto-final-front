import { Row, Col } from "react-bootstrap";

const ComoFunciona = () => (
  <>
    <Row as="main">
      <Col sm={12} as="h2">Cómo funciona?</Col>
      <Col as="section">
        <h3>Infórmate sobre qué incidencias hay en tu zona</h3>
        <h3>Regístrate para votar incidencias o regístrarlas tú mismo</h3>
      </Col>
      <Col as="section">
        <h3>¿Quieres registrar una incidencia?</h3>
        <Row as="ul" className="puntoFuncionamiento">
          <li>Primero comprueba si alguien ya ha reportado esa incidencia. ¿Cómo?</li>
          <ul>
            <li>Localiza la incidencia en el mapa</li>
            <li>Consulta el listado de incidencias utilizando filtros o el buscador para encontrar la incidencia</li>
          </ul>
          <Col as="li">Si la incidencia ya está registrada puedes darle tu voto para mejorar su posicionamiento</Col>
          <Col as="li">Si todavía no está registrada ve al formulario de Nueva incidencia a través del menú de navegación</Col>
          <li>Consulta Mis incidencias para hacer el seguimiento de las incidencias que hayas registrado</li>
          <li>
            Si detectas que una incidencia está duplicada puedes reportarlo en el detalle de la incidencia
          </li>
        </Row>
      </Col>
    </Row>
  </>
);

export default ComoFunciona;
