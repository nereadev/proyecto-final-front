import { Col, Row } from "react-bootstrap";
import Cabecera from "../componentes/Cabecera";
import Footer from "../componentes/Footer";
import ListaIncidencias from "../componentes/ListaIncidencias";

const MisIncidenciasPagina = () => (
  <>
    <Cabecera />
    <ListaIncidencias />
    <Footer />
  </>
);

export default MisIncidenciasPagina;
