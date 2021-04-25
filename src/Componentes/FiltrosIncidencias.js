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
    setTipo(e.target.value);
  };
  const activarOrdenar = () => {
    setFiltroOrdenar(!filtroOrdenar);
  };
  const aplicarFiltro = () => {
    if (filtroTipo) {
      setQuery(tipo);
    }
    if (filtroOrdenar) {
      setQuery2("fecha");
    }
  };
  return (
    <>
      <Form className="filtro-incidencias" as={Col} md={12}>
        <Row className="filtros d-flex">
          <Form.Group as={Col} className="filtro-filtrar">
            <Form.Control as="select" onClick={activarTipo} defaultValue="Filtar por...">
              <option>
                Filtrar por...
              </option>
              <option value="medio ambiente"> Medio Ambiente</option>
              <option value="civismo">Civismo</option>
              <option value="infraestructura"> Infraestrucutra</option>
              <option value="otros">Otros</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} className="filtro-ordenar-por">
            <Form.Control as="select" onClick={activarOrdenar} defaultValue="fecha">
              <option>Ordenar por...</option>
              <option value="relevancia">Relevancia</option>
              <option value="fecha">Fecha</option>
            </Form.Control>
          </Form.Group>
          <Button variant="outline-primary" onClick={aplicarFiltro}>Aplicar</Button>
        </Row>
      </Form>
    </>
  );
};

export default FiltroIncidencias;
