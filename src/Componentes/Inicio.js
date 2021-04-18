import { useState } from "react";
import {
  ButtonGroup, Button, Row, Col
} from "react-bootstrap";
import Listado from "./Listado";
import Mapa from "./Mapa";

const Inicio = () => {
  const [listado, setListado] = useState(false);
  const toggleContenido = () => {
    setListado(!listado);
  };

  return (
    <Row as="section" className="contenidoInicio">
      <Col sm={12} as="ButtonGroup" className="mapa-lista">
        <Button variant="secondary" onClick={toggleContenido} className="botonMapaLista">Mapa</Button>
        <Button variant="secondary" onClick={toggleContenido} className="botonMapaLista">Listado</Button>
      </Col>
      { listado ? <Listado /> : <Mapa />}
    </Row>
  );
};

export default Inicio;
