import {
  Row, Col
} from "react-bootstrap";

const ComoFuncionaPagina = () => (
  <Row as="main">
    <Col sm={12} as="h2" className="text-center pt-4">¿Cómo Funciona?</Col>
    <Col sm={12} as="section" className="">
      <Row className="tips-titulos">
        <Col xs={2} sm={1}><img src="/img/1.png" alt="número 1" className="icono-numero" /></Col>
        <Col xs={5} sm={2} as="h3">
          Infórmate sobre qué incidencias hay en tu zona
        </Col>
        <Col xs={5} sm={2} className="mt-4">
          <img src="/img/icono-mapa2.png" alt="icono mapa" className="icono-mapa position-absolute" />
          <img src="/img/punto.png" alt="punto en el mapa" className="icono-punto position-relative" />
        </Col>
        <Col xs={4} sm={1}><img src="/img/2.png" alt="número 1" className="icono-numero" /></Col>
        <Col xs={8} sm={2} as="h3">
          Vota incidencias
          <img src="/img/icono-voto.png" alt="icono voto" className="icono-voto mt-2 mr-3" />
          <img src="/img/2.png" alt="icono número" className="icono-voto-numero" />
        </Col>
        <Col xs={4} sm={1} as="h3">- o -</Col>
        <Col xs={8} sm={2} as="h3">
          Regístrarlas tú mismo
          <img src="/img/icono-incidencia.png" alt="icono número" className="icono-incidencia mt-4" />
        </Col>
      </Row>
      <Row>
        <Col as="h3" className="tips-titulos">¿Quieres registrar una incidencia?</Col>
        <Col xs={12} className="tips-solo">
          Primero comprueba si alguien ya ha reportado esa incidencia. ¿Cómo?
        </Col>
        <Col xs={12} sm={6} className="mini-lista mini-tips">
          <i className="fas fa-circle" />
          Localiza la incidencia en el mapa
        </Col>
        <Col xs={12} sm={6} className="mini-lista mini-tips">
          <i className="fas fa-circle" />
          Consulta el listado de incidencias utilizando filtros o el buscador para encontrar la incidencia
        </Col>
        <Col xs={12} sm={3} className="ultimos-pasos tips">Si la incidencia ya está registrada puedes darle tu voto para mejorar su posicionamiento</Col>
        <Col xs={12} sm={3} className="ultimos-pasos tips">Si todavía no está registrada ve al formulario de Nueva incidencia a través del menú de navegación</Col>
        <Col xs={12} sm={3} className="ultimos-pasos tips">Consulta Mis incidencias para hacer el seguimiento de las incidencias que hayas registrado</Col>
        <Col xs={12} sm={3} className="ultimos-pasos tips">Si detectas que una incidencia está duplicada puedes reportarlo en el detalle de la incidencia</Col>

        {/*  <ul>
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
        </ul> */}
      </Row>
    </Col>
  </Row>
);

export default ComoFuncionaPagina;
