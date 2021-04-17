import { Col, Row } from "react-bootstrap";

const IncidenciaPagina = () => (
  <>
    <Row as="h2">Incidencia nºX</Row>
    <Row as="section">
      <Col className="incidencia" as="ul">
        <Row>
          <Col>Nombre:</Col>
          <Col>Este es el Nombre</Col>
        </Row>
        <Row>
          <Col>Descripción:</Col>
          <Col>Esta es la descripción</Col>
        </Row>
        <Row>
          <Col>Fotografía:</Col>
          <Col>Aquí la foto</Col>
        </Row>
        <Row>
          <Col>Tipo:</Col>
          <Col>Medio Ambiente | civismo</Col>
        </Row>
        <Row>
          <Col>Localización:</Col>
          <Col>123.4.566 - 213.123.444</Col>
        </Row>
        <Row>
          <Col>Fecha:</Col>
          <Col>23/01/2021</Col>
        </Row>
        <Row>
          <Col>Favoritos:</Col>
          <Col>
            <i className="fas fa-star" />
            {" "}
            7
          </Col>
        </Row>
      </Col>
    </Row>
  </>
);

export default IncidenciaPagina;
