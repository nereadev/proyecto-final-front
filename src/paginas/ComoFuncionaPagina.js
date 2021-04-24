import {
  Row, Col
} from "react-bootstrap";

const ComoFuncionaPagina = () => (
  <Row as="main">
    <Col sm={12} as="h2" className="text-center pt-4">Cómo funciona?</Col>
    <Col sm={12} as="section" className="">
      <ul className="list-unstyled lista-titulos">
        <li className="tips-titulos"><h3>Infórmate sobre qué incidencias hay en tu zona</h3></li>
        <li className="tips-titulos"><h3>Regístrate para votar incidencias o regístrarlas tú mismo</h3></li>
      </ul>
      <h3 className="tips-titulos">¿Quieres registrar una incidencia?</h3>
      <ul>
        <li className="tips-solo">Primero comprueba si alguien ya ha reportado esa incidencia. ¿Cómo?</li>
        <ul className="mini-lista">
          <li className="mini-tips">Localiza la incidencia en el mapa</li>
          <li className="mini-tips">Consulta el listado de incidencias utilizando filtros o el buscador para encontrar la incidencia</li>
        </ul>
        <ul className="ultimos-pasos">
          <li className="tips">Si la incidencia ya está registrada puedes darle tu voto para mejorar su posicionamiento</li>
          <li className="tips">Si todavía no está registrada ve al formulario de Nueva incidencia a través del menú de navegación</li>
          <li className="tips">Consulta Mis incidencias para hacer el seguimiento de las incidencias que hayas registrado</li>
          <li className="tips">
            Si detectas que una incidencia está duplicada puedes reportarlo en el detalle de la incidencia
          </li>
        </ul>
      </ul>
    </Col>
  </Row>
);

export default ComoFuncionaPagina;
