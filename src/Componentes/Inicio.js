import { useState } from "react";
import {
  Button, Row, Col
} from "react-bootstrap";
import Listado from "./Listado";
import Mapa from "./Mapa";

const Inicio = () => {
  const [listado, setListado] = useState(false);

  return (
    <>
      <Col sm={12} className="mapa-lista">
        <Button variant="secondary" onClick={() => setListado(false)} className="botonMapaLista">Mapa</Button>
        <Button variant="secondary" onClick={() => setListado(true)} className="botonMapaLista">Listado</Button>
      </Col>
      <Col as="section" sm={12}>
        {listado ? <Listado /> : <Mapa />}
      </Col>
    </>
  );
};

export default Inicio;
