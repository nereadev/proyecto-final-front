import { useState } from "react";
import {
  Col, Nav, Button, NavLink
} from "react-bootstrap";
import Listado from "./Listado";
import Mapa from "./Mapa";

const Inicio = () => {
  const [listado, setListado] = useState(false);
  const [mapaBarrios, setMapaBarrios] = useState(false);
  return (
    <>
      <Col sm={12} className="mapa-lista">
        <Nav activeKey="mapa">
          <Nav.Item>
            <NavLink className="navLink" eventKey="mapa" onSelect={() => setListado(false)}>
              Mapa
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="navLink" eventKey="listado" onSelect={() => setListado(true)}>
              Listado
            </NavLink>
          </Nav.Item>
        </Nav>
      </Col>
      {listado || (
        <Col sm={12} className="mapa-opciones">
          <Button variant="secondary" onClick={() => setMapaBarrios(false)} className="botonMapaLista">Incidencias</Button>
          <Button variant="secondary" onClick={() => setMapaBarrios(true)} className="botonMapaLista">Barrios</Button>
        </Col>
      )}
      <Col as="section" sm={12}>
        {listado ? <Listado /> : <Mapa mapaBarrios={mapaBarrios} />}
      </Col>
    </>
  );
};

export default Inicio;
