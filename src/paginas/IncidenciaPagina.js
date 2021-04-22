import { useContext, useEffect, useState } from "react";
// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import {
  Button, ButtonGroup, Col, Overlay, Row
} from "react-bootstrap";
import { useParams } from "react-router";
import { ContextoUsuario } from "../contextos/ContextoUsuario";
import useFetch from "../utils/hooks/useFetch";

// falta linkar con datosAPI, es una prueba
const pruebaResuelta = false;

const IncidenciaPagina = () => {
  const { id } = useParams();
  const [incidenciaElegida, setIncidenciaElegida] = useState("");
  const { getUsuario: { existeToken } } = useContext(ContextoUsuario);
  const [info, setInfo] = useState(false);
  const fecha = incidenciaElegida ? new Date(incidenciaElegida.registrada).toLocaleDateString() : "";
  const mostrarInfo = () => {
    setInfo(!info);
  };
  const { datos: incidencia, pideDatos: pideIncidencia } = useFetch();
  useEffect(() => {
    if (existeToken) {
      const token = localStorage.getItem("token-usuario");
      pideIncidencia(true, `incidencias/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    }
  }, [existeToken]);
  useEffect(() => {
    if (incidencia) {
      setIncidenciaElegida(incidencia.body.incidencia);
    }
  }, [incidencia]);

  return (
    <Row as="main">
      <Col>
        <Row as="h2">
          Incidencia
          {" "}
          {incidenciaElegida._id}
        </Row>
        <Col className={`estado-info ${info ? "" : "desactivada"}`}>
          El estado azul indica que la incidencia se ha registrado.
          El estado verde indica que la incidencia se ha gestionado.
        </Col>
        <Row className="detalle-incidencia">
          <Col className="incidencia" as="ul">
            <Row>
              <Col>
                Estado:
              </Col>
              <Col>
                <i className={`fas fa-circle
            ${pruebaResuelta ? "incidencia-resuelta" : "incidencia-recibida"}`}
                />
                <Button className="boton-info" variant="light" onClick={() => mostrarInfo()}>
                  {" "}
                  {incidenciaElegida.resuelta !== true ? "  Registrada" : "  Resuelta"}
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                Nombre:
              </Col>
              <Col>
                {incidenciaElegida.nombre}
              </Col>
            </Row>
            <Row>
              <Col>Descripción:</Col>
              <Col>{incidenciaElegida.descripcion}</Col>
            </Row>
            <Row>
              <Col>Tipo:</Col>
              <Col>{incidenciaElegida.tipoIncidencia?.tipo}</Col>
            </Row>
            <Row>
              <Col>Localización:</Col>
              <Col>{incidenciaElegida.direccion}</Col>
            </Row>
            <Row>
              <Col>Fecha:</Col>
              <Col>{fecha}</Col>
            </Row>
            <Row>
              <Col>Favoritos:</Col>
              <Col>
                <i className="fas fa-star" />
                {" "}
                7
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default IncidenciaPagina;
