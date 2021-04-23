import { Row } from "react-bootstrap";
import FiltroIncidencias from "./FiltrosIncidencias";
import Incidencia from "./Incidencia";

const Listado = () => (
  <>
    <Row as="h2">Lista de Incidencias Generales</Row>
    <FiltroIncidencias />
    <Incidencia />
  </>
);

export default Listado;
