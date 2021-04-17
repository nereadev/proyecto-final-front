import {
  Col, Collapse, Form, InputGroup, Row
} from "react-bootstrap";

const ListaPagina = () => (
  <>
    <Row as="h2">Lista de Incidencias Generales</Row>
    <Form className="filtro-incidencias" as={Row} md={10}>
      <Form.Group as={Col} className="filtro-filtrar">
        <Form.Label>Filtrar:</Form.Label>
        <Form.Control as="select" defaultValue=" ">
          <option>Elige...</option>
          <option>Tipo Incidencia</option>
          <option>Localización</option>
        </Form.Control>
        <Form.Control as="select" defaultValue="Elige...">
          <option>Elige...</option>
          <option>Medio Ambiente</option>
          <option>Civismo</option>
          <option>Infraestrucutra</option>
          <option>Otros</option>
        </Form.Control>
        <Form.Control as="select" defaultValue="Elige...">
          <option>Elige...</option>
          <option>Código Postal</option>
          <option>Dirección</option>
        </Form.Control>
      </Form.Group>
      <Form.Group as={Col} className="filtro-ordenar-por">
        <Form.Label>Ordenar Por:</Form.Label>
        <Form.Control as="select" defaultValue="Elige...">
          <option>Elige...</option>
          <option>Relevancia</option>
          <option>Fecha</option>
        </Form.Control>
      </Form.Group>
      <InputGroup as={Col} className="filtro-buscar">
        <InputGroup.Prepend>
          <InputGroup.Text><i className="fas fa-search" /></InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          required
          type="text"
          placeholder="Buscar..."
        />
      </InputGroup>
    </Form>
    <Row as="section" className="lista-incidencias">
      <Col as="ul">
        <Row className="titulo-lista" as="li">
          <Col><i className="fas fa-list-ul" /></Col>
          <Col>Nombre incidencia</Col>
          <Col>Tipo incidencia</Col>
          <Col>Descripción Incidencia</Col>
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

export default ListaPagina;
