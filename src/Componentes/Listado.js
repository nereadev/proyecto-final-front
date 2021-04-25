import { Row } from "react-bootstrap";
import FiltrosIncidencias from "./FiltrosIncidencias";
import Incidencia from "./Incidencia";

const Listado = () => (
  <>
    <Row as="h2">Lista de Incidencias Generales</Row>
    <FiltrosIncidencias />
    <Incidencia />
  </>
);

export default Listado;
