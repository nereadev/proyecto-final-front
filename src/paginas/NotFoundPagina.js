import { Button, Row } from "react-bootstrap";

const NotFoundPagina = () => (
  <Row as="main">
    <h1>No se encontró la pagina.</h1>
    <Button href="/inicio">Volver</Button>
  </Row>
);

export default NotFoundPagina;
