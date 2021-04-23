import { useContext, useState } from "react";
import {
  Col, Form, InputGroup, Row, Button
} from "react-bootstrap";
import { ContextoIncidencias } from "../contextos/ContextoIncidencias";

const FiltroIncidencias = () => {
  const { getIncidencias } = useContext(ContextoIncidencias);
  const setQuery = getIncidencias.setQuery;
  const setQuery2 = getIncidencias.setQuery2;
  const [filtroTipo, setFiltroTipo] = useState(false);
  const [filtroOrdenar, setFiltroOrdenar] = useState(false);
  const [tipo, setTipo] = useState(false);
  const activarTipo = (e) => {
    setFiltroTipo(true);
    console.log(filtroTipo);
    setTipo(e.target.value);
  };
  const activarOrdenar = () => {
    setFiltroOrdenar(!filtroOrdenar);
  };
  const aplicarFiltro = () => {
    if (filtroTipo) {
      setQuery(tipo);
      console.log(tipo);
    }
    if (filtroOrdenar) {
      setQuery2("fecha");
    }
  };
  return (
    <>
      <Form className="filtro-incidencias" as={Col} md={12}>
        <Row>
          <Form.Group as={Col} className="filtro-filtrar">
            <Form.Label>Filtrar:</Form.Label>
            <Form.Control as="select" defaultValue="Tipo...">
              <option>Tipo...</option>
              <option value="medio ambiente" onClick={activarTipo}> Medio Ambiente</option>
              <option value="civismo" onClick={activarTipo}>Civismo</option>
              <option value="infraestructura" onClick={activarTipo}> Infraestrucutra</option>
              <option value="otros" onClick={activarTipo}>Otros</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} className="filtro-ordenar-por">
            <Form.Label>Ordenar Por:</Form.Label>
            <Form.Control as="select" defaultValue="Elige...">
              <option>Elige...</option>
              <option>Relevancia</option>
              <option onClick={activarOrdenar}>Fecha</option>
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
        <Row>
          <Button onClick={aplicarFiltro}>Aplicar</Button>
        </Row>
      </Form>
    </>
  );
};

export default FiltroIncidencias;
