import { useEffect, useState } from "react";
import {
  Button, Col, Form, Row
} from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Incidencia from "./Incidencia";
import IncidenciaForm from "./IncidenciaForm";
import Listado from "./Listado";

const LocalizacionForm = () => {
  const [codigoPostal, setCodigoPostal] = useState("");
  const [direccion, setDireccion] = useState("");
  const formDireccion = (`${direccion}, ${codigoPostal}`);
  const [marcar, setMarcar] = useState(false);
  const [introducirDatos, setintroducirDatos] = useState(false);
  const [lista, setLista] = useState(false);
  const [direccionGeo, setDireccionGeo] = useState({});
  const [ocultarIntroducirDatos, setOcultarIntroducirDatos] = useState(true);
  const [siguiente, setSiguiente] = useState(false);
  const [activarBoton, setActivarBoton] = useState(false);
  const history = useHistory();
  const mostrarDesplegable = (e) => {
    if (e.target.checked) {
      setintroducirDatos(!introducirDatos);
    } else {
      setintroducirDatos(!introducirDatos);
    }
  };
  const marcarCheck = () => {
    setMarcar(!marcar);
  };
  const geoUsuario = () => {
    const success = (position) => {
      setDireccionGeo({
        latitud: position.coords.latitude,
        longitud: position.coords.longitude
      });
    };
    navigator.geolocation.getCurrentPosition(success);
    setOcultarIntroducirDatos(!ocultarIntroducirDatos);
  };
  const modificaValor = e => {
    e.preventDefault();
    if (e.target.name === "codigo") {
      setCodigoPostal(e.target.value);
    } else {
      setDireccion(e.target.value);
    }
  };
  /*   const mostrarLista = () => {
    setLista(!lista);
  };
  const mostrarBotonSiguiente = () => {
    setSiguiente(!siguiente);
  }; */
  const cambiarBoton = () => {
    setActivarBoton(!activarBoton);
  };
  const linkInicio = () => {
    history.push("/inicio");
  };
  return (
    <>
      {!activarBoton
        ? (
          <>
            <Form className="formulario" as={Col} md={10}>
              <p>
                Antes de registrar tu nueva incidencia, por favor comprueba que ya
                {" "}
                <strong>no</strong>
                {" "}
                haya sido creada por otro usuario.
                {" "}
                <Link to="/inicio">¡Comprueba!</Link>
              </p>
              <Form.Label>Localización:</Form.Label>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  className={`${ocultarIntroducirDatos || "off"}`}
                  onClick={marcarCheck}
                  onChange={mostrarDesplegable}
                  label="Introducir localización manual"
                />
              </Form.Group>
              <Col className={`introducir-datos ${introducirDatos ? "" : "off"}`}>
                <Form.Group>
                  <Form.Label>Código Postal:</Form.Label>
                  <Form.Control
                    required
                    name="codigo"
                    type="label"
                    value={codigoPostal}
                    onChange={modificaValor}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    required
                    name="direccion"
                    type="label"
                    value={direccion}
                    onChange={modificaValor}
                  />
                </Form.Group>
              </Col>
              <Form.Group>
                <Form.Check
                  id="formBasic"
                  className={`${introducirDatos && "off"}`}
                  type="checkbox"
                  onChange={geoUsuario}
                  label="Usar mi ubicación actual"
                  onClick={marcarCheck}
                />
                {/* Por ahora lo dejaremos desactivado sin comprobacion
                <Col className={`${marcar ? "" : "off"}`}>
                  <Button variant="outline-danger" onClick={mostrarLista}>Comprobar</Button>
                  <Col className={`${lista || "off"}`}>
                    <Row className="comprobar-incidencia">
                      ¿Has visto tu incidencia?
                      <Button variant="light" onClick={linkInicio}>Sí</Button>
                      /
                      <Button variant="light" onClick={mostrarBotonSiguiente}>No</Button>
                    </Row>
                  </Col>
                </Col> */}
              </Form.Group>
            </Form>
            <Row className="footer-nueva-incidencia p-3">
              <Col>(1/2)</Col>
              <Col />
              <Button
                className="boton-nueva"
                variant="info"
                // disabled={!siguiente}
                onClick={cambiarBoton}
              >
                <i className="fas fa-arrow-right" />
                {" "}
                Siguiente
              </Button>
            </Row>

          </>
        )
        : <IncidenciaForm direccionGeo={direccionGeo} direccion={formDireccion} />}
    </>
  );
};

export default LocalizacionForm;
