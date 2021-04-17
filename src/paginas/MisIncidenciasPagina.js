import { Col, Row } from "react-bootstrap";

const MisIncidenciasPagina = () => (
  <>
    <Row as="h2">Mis Incidenicas</Row>
    <Row as="section" className="lista-incidencias">
      <Col as="ul">
        <Row className="titulo-lista" as="li">
          <Col><i className="fas fa-list-ul" /></Col>
          <Col>Nombre</Col>
          <Col>Tipo</Col>
          <Col>Descripción</Col>
          <Col><i className="fas fa-star" /></Col>
          <Col>+info</Col>
        </Row>
        <Row as="li">
          <Col>1</Col>
          <Col>Árbol caído</Col>
          <Col>Medio Ambiente</Col>
          <Col>Hay un árbol caído</Col>
          <Col>7</Col>
          <Col><i className="fas fa-plus" /></Col>
        </Row>
      </Col>
    </Row>
  </>
);

export default MisIncidenciasPagina;
