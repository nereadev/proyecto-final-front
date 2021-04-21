import { useState } from "react";
import {
  Button, Col, Row, Toast
} from "react-bootstrap";
import { useHistory } from "react-router";
import IncidenciaForm from "../componentes/IncidenciaForm";
import LocalizacionForm from "../componentes/LocalizacionForm";

const NuevaIncidenciaPagina = () => {
  const [contenidoBoton, setContenidoBoton] = useState(true);
  const [ventana, setVentana] = useState(false);
  const history = useHistory();
  const estadoBoton = () => {
    setContenidoBoton(!contenidoBoton);
    console.log(contenidoBoton);
  };
  const toggleVentana = () => setVentana(!ventana);
  console.log(ventana);
  const linkInicio = () => {
    history.push("/mis-incidencias");
  };
  return (
    <Row as="main">
      <Col>
        <Row as="h2">Formulario Incidencia</Row>
        <Row as="section" className="nueva-incidencia">
          {contenidoBoton ? <LocalizacionForm /> : <IncidenciaForm ventana={ventana} />}
        </Row>
        <Row>
          <Col>
            (
            {contenidoBoton ? "1" : "2"}
            /2)
          </Col>
          {contenidoBoton
            ? (
              <Button className="boton-nueva" variant="info" onClick={estadoBoton}>
                <i className="fas fa-arrow-right" />
                {" "}
                Siguiente
              </Button>
            )
            : (<Button className="boton-nueva" variant="info" onClick={toggleVentana}>Registrar</Button>)}
          <Col className="ventana" sm={12}>
            <Toast show={ventana} onClose={linkInicio}>
              <Toast.Header>
                <i className="fas fa-check-circle mr-2" />
                <strong className="mr-auto">Incidencia Registrada</strong>
                <small>cerrar</small>
              </Toast.Header>
              <Toast.Body>La nueva incidencia se ha enviado correctamente.</Toast.Body>
            </Toast>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default NuevaIncidenciaPagina;
