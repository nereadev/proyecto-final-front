import {
  Row, Col
} from "react-bootstrap";

const ComoFunciona = () => (
  <Row as="main">
    <Col sm={12} as="h2" className="text-center">Cómo funciona?</Col>
    <Col sm={12} as="section" className="">
      <ul className="list-unstyled text-center d-flex">
        <li clasaName="tips-titulos"><h3>Infórmate sobre qué incidencias hay en tu zona</h3></li>
        <li clasaName="tips-titulos"><h3>Regístrate para votar incidencias o regístrarlas tú mismo</h3></li>
      </ul>
      <h3>¿Quieres registrar una incidencia?</h3>
      <ul>
        <li className="tips">Primero comprueba si alguien ya ha reportado esa incidencia. ¿Cómo?</li>
        <ul className="mini-lista">
          <li className="mini-tips">Localiza la incidencia en el mapa</li>
          <li className="mini-tips">Consulta el listado de incidencias utilizando filtros o el buscador para encontrar la incidencia</li>
        </ul>
        <li className="tips">Si la incidencia ya está registrada puedes darle tu voto para mejorar su posicionamiento</li>
        <li className="tips">Si todavía no está registrada ve al formulario de Nueva incidencia a través del menú de navegación</li>
        <li className="tips">Consulta Mis incidencias para hacer el seguimiento de las incidencias que hayas registrado</li>
        <li className="tips">
          Si detectas que una incidencia está duplicada puedes reportarlo en el detalle de la incidencia
        </li>
      </ul>
    </Col>
    {/*  <Col>
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
    </Col> */}
  </Row>
);

export default ComoFunciona;
