import { Row } from "react-bootstrap";
import FiltroIncidencias from "./FiltrosIncidencias";
import ListaIncidencias from "./ListaIncidencias";

const Listado = () => (
  <>
    <Row as="h2">Lista de Incidencias Generales</Row>
    <FiltroIncidencias />
    <ListaIncidencias />
  </>
);

export default Listado;
