import { useContext } from "react";
import {
  Col, Form, InputGroup, Row
} from "react-bootstrap";
import { ContextoIncidencias } from "../contextos/ContextoIncidencias";

const FiltroIncidencias = (props) => {
  const { getIncidencias } = useContext(ContextoIncidencias);
  const setQuery = getIncidencias.setQuery;
  const filtroMedioAmbiente = () => setQuery("medio ambiente");
  const filtroCivismo = () => setQuery("civismo");
  const filtroInfraestructura = () => setQuery("infraestructura");
  const filtroOtros = () => setQuery("otros");

  return (
    <>
      <Form className="filtro-incidencias" as={Col} md={12}>
        <Row>
          <Form.Group as={Col} className="filtro-filtrar">
            <Form.Label>Filtrar:</Form.Label>
            <Form.Control as="select" defaultValue="Tipo...">
              <option>Tipo...</option>
              <option onClick={filtroMedioAmbiente}> Medio Ambiente</option>
              <option onClick={filtroCivismo}>Civismo</option>
              <option onClick={filtroInfraestructura}> Infraestrucutra</option>
              <option onClick={filtroOtros}>Otros</option>
            </Form.Control>
            <InputGroup>
              <Form.Control
                required
                type="text"
                placeholder="Código Postal..."
              />
            </InputGroup>
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
        </Row>
      </Form>
    </>
  );
};

export default FiltroIncidencias;
