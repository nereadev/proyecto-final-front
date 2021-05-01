import { useContext, useState, useEffect } from "react";
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
  const [orden, setOrden] = useState(false);

  const activarTipo = e => {
    setFiltroTipo(true);
    setTipo(e.target.value);
  };
  const activarOrdenar = e => {
    setFiltroOrdenar(true);
    setOrden(e.target.value);
  };
  const aplicarFiltro = e => {
    e.preventDefault();
    if (filtroTipo) {
      if (tipo === "todos") {
        setQuery(false);
        setQuery2(false);
        return;
      }
      setQuery(tipo);
    }
    if (filtroOrdenar) {
      setQuery2(orden);
    }
  };

  useEffect(() => {
    setQuery(false);
    setQuery2(false);
  }, [getIncidencias]);

  return (
    <>
      <Form className="filtro-incidencias" onSubmit={aplicarFiltro}>
        <Row className="filtros d-flex">
          <Form.Group as={Col} className="filtro-filtrar">
            <Form.Control as="select" onChange={activarTipo} defaultValue="Filtar por...">
              <option>
                Filtrar por...
              </option>
              <option value="todos"> Todos los tipos</option>
              <option value="medio ambiente"> Medio Ambiente</option>
              <option value="civismo">Civismo</option>
              <option value="infraestructura"> Infraestructura</option>
              <option value="otros">Otros</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} className="filtro-ordenar-por">
            <Form.Control as="select" onChange={activarOrdenar} defaultValue="ordenar por">
              <option value="ordenar por">Ordenar por...</option>
              <option value="relevancia">Relevancia</option>
              <option value="fecha">Fecha</option>
            </Form.Control>
          </Form.Group>
          <Button variant="light" type="sumbit" onClick={aplicarFiltro}>Aplicar</Button>
        </Row>
      </Form>
    </>
  );
};

export default FiltroIncidencias;
