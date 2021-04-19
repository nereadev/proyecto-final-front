import { useState } from "react";
import {
  Col, Nav
} from "react-bootstrap";
import Listado from "./Listado";
import Mapa from "./Mapa";

const Inicio = () => {
  const [listado, setListado] = useState(false);

  return (
    <>
      <Col sm={12} className="mapa-lista">
        <Nav activeKey="mapa">
          <Nav.Item>
            <Nav.Link className="navLink" eventKey="mapa" onSelect={() => setListado(false)}>
              Mapa
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navLink" eventKey="listado" onSelect={() => setListado(true)}>
              Listado
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col as="section" sm={12}>
        {listado ? <Listado /> : <Mapa />}
      </Col>
    </>
  );
};

export default Inicio;
