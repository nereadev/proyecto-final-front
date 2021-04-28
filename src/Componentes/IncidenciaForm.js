/* eslint-disable react/require-default-props */
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

const IncidenciaForm = props => {
  const {
    direccionGeo, direccion: direccionPostal, coordenadas, datosGeo
  } = props;
  const { existeToken, token } = useContext(ContextoToken);
  const idUsuario = jwt_decode(token).id;
  const [ventana, setVentana] = useState(false);
  const [cargando, setCargando] = useState(false);
  const history = useHistory();
  const { pideDatos: postUsuario, statusApi } = useFetch();
  const toggleCargando = () => setCargando(!cargando);
  const longitudApi = coordenadas?.features[0].geometry.coordinates[0];
  const latitudApi = coordenadas?.features[0].geometry.coordinates[1];

  useEffect(() => {
    if (statusApi === 201) { setVentana(!ventana); }
  }, [statusApi]);

  const linkInicio = () => {
    history.push("/mis-incidencias");
    window.location.reload();
  };

  const { datosForm, modificarDatos } = useForm({
    nombre: "",
    tipoIncidencia: "",
    descripcion: "",
    direccion: direccionPostal || datosGeo?.features[0].place_name,
    latitud: latitudApi || direccionGeo?.latitud || 0,
    longitud: longitudApi || direccionGeo?.longitud || 0,
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
      datos.append("descripcion", datosForm.descripcion);
      datos.append("resuelta", "false");
      datos.append("tipoIncidencia", datosForm.tipoIncidencia);
      datos.append("direccion", datosForm.direccion);
      datos.append("latitud", datosForm.latitud);
      datos.append("longitud", datosForm.longitud);
      postUsuario(true, "incidencias", {
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
      <Col as="section">
        <Form className={`formulario ${!cargando ? "" : "oculto"} p-3`} autoComplete="off" onSubmit={enviaIncidencia}>
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
              <option value="medio ambiente">Medio ambiente</option>
              <option value="civismo">Civismo</option>
              <option value="infraestructura">Infraestructura</option>
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
          <Button className="boton-nueva" type="submit" variant="info" onClick={toggleCargando}>Registrar</Button>
          <Form.Group />
        </Form>
        <span className="numero-pie">2/2</span>
      </Col>
      <Col sm={12} as={Toast} show={cargando} onClose={toggleCargando} className="ventana">
        <Toast.Header>
          <strong className="mr-auto">Cargando la incidencia</strong>
          <small>cerrar</small>
        </Toast.Header>
        <Toast.Body>Por favor espere un momento.</Toast.Body>
      </Col>
      <Col sm={12} as={Toast} show={ventana} onClose={linkInicio} className="ventana">
        <Toast.Header>
          <i className="fas fa-check-circle mr-2" />
          <strong className="mr-auto">Incidencia Registrada</strong>
          <small>cerrar</small>
        </Toast.Header>
        <Toast.Body>La nueva incidencia se ha enviado correctamente.</Toast.Body>
      </Col>
    </>
  );
};

IncidenciaForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  direccionGeo: PropTypes.object.isRequired,
  // eslint-disable-next-line react/require-default-props
  direccion: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  coordenadas: PropTypes.object,
  // eslint-disable-next-line react/require-default-props
  datosGeo: PropTypes.string
};

export default IncidenciaForm;
