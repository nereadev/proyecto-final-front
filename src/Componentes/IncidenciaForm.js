// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import PropTypes from "prop-types";
import {
  Button, Col, Form, Row, Toast
} from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import useFetch from "../utils/hooks/useFetch";
import useForm from "../utils/hooks/useForm";
import { ContextoToken } from "../contextos/ContextoToken";
import { ContextoUsuario } from "../contextos/ContextoUsuario";

const IncidenciaForm = props => {
  const token = localStorage.getItem("token-usuario");
  const idUsuario = jwt_decode(token).id;
  const { direccionGeo } = props;
  const token = localStorage.getItem("token-usuario");
  const idUsuario = jwt_decode(token).id;
  const { existeToken } = useContext(ContextoToken);
  const [ventana, setVentana] = useState(false);
  const history = useHistory();
  const { datos, pideDatos: postUsuario } = useFetch();
  const toggleVentana = () => setVentana(!ventana);
  const linkInicio = () => {
    history.push("/mis-incidencias");
  };

  const { datosForm, modificarDatos } = useForm({
    nombre: "",
    tipoIncidencia: "",
    descripcion: "",
    direccion: "",
    latitud: direccionGeo.latitud,
    longitud: direccionGeo.longitud,
    resuelta: "",
    fotoIncidencia: null
  });
  const enviaIncidencia = e => {
    e.preventDefault();
    if (existeToken) {
      const datos = new FormData();
      datos.append("usuarioCreador", idUsuario);
      datos.append("fotoIncidencia", datosForm.fotoIncidencia);
      datos.append("nombre", datosForm.nombre);
      datos.append("resuelta", "false");
      datos.append("tipoIncidencia", datosForm.tipoIncidencia);
      datos.append("direccion", datosForm.direccion);
      datos.append("latitud", datosForm.latitud);
      datos.append("longitud", datosForm.longitud);
      postUsuario(false, "http://localhost:5000/incidencias", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: datos
      });
    }
  };
  return (
    <>
      <Form className={`formulario ${!ventana ? "" : "oculto"}`} md={10} onSubmit={enviaIncidencia}>
        <Form.Group>
          <Form.Label>Nombre Incidencia:</Form.Label>
          <Form.Control
            required
            name="nombre"
            type="text"
            value={datosForm.nombre}
            onChange={modificarDatos}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Tipo:</Form.Label>
          <Form.Control as="select" name="tipoIncidencia" value={datosForm.tipoIncidencia} onChange={modificarDatos}>
            <option>Elige...</option>
            <option value="Medio Ambiente">Medio ambiente</option>
            <option value="civismo">Civismo</option>
            <option value="Infraestructura">Infraestructura</option>
            <option value="otros">Otros:</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Descripción:</Form.Label>
          <Form.Control as="textarea" name="descripcion" value={datosForm.descripcion} onChange={modificarDatos} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Fotografía:</Form.Label>
          <Form.File name="fotoIncidencia" label="(Formato permitido: jpg, jpeg o png | Tamaño máximo 3 Mb)" onChange={modificarDatos} />
        </Form.Group>
        <Form.Group />
        <Col>
          <Button className="boton-nueva" type="submit" variant="info" onClick={toggleVentana}>Registrar</Button>
        </Col>
      </Form>
      <Col>
        <Row>
          <Col>
            (2/2)
            {" "}
          </Col>
          <Col />
        </Row>
      </Col>
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
    </>
  );
};

IncidenciaForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  direccionGeo: PropTypes.object.isRequired
};

export default IncidenciaForm;
