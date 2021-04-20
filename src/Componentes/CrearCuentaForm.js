import { useEffect, useState } from "react";
import {
  Button, Col, Form, Row
} from "react-bootstrap";
import useForm from "../hooks/useForm";
import useFetch from "../hooks/useFetch";
import usuariosJson from "../img/usuarios.json";

const CrearCuentaForm = () => {
  // Esta es una forma cutre de realizar el formulario, abajo del export se encuentra el código a refactorizar para dejarlo funcionando
  const [usuario, setUsuario] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [contrasenya, setContrasenya] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const { datos, pideDatos } = useFetch();
  const usuariosApi = datos?.body.usuarios;
  console.log(usuariosApi);

  const url = ("https://api-incidencias.herokuapp.com/usuarios");

  useEffect(() => pideDatos(url), [pideDatos, url]);

  const getNombre = e => {
    setNombre(e.target.value);
  };
  const getApellidos = e => {
    setApellidos(e.target.value);
  };
  const getEmail = e => {
    setEmail(e.target.value);
  };
  const getContrasenya = e => {
    setContrasenya(e.target.vaule);
  };
  const getDireccion = e => {
    setDireccion(e.target.value);
  };
  const getTelefono = e => {
    setTelefono(e.target.value);
  };
  const getCodigoPostal = e => {
    setCodigoPostal(e.target.value);
  };
  const nuevoUsuario = e => {
    e.preventDefault();
    setUsuario([...usuariosApi, {
      nombre,
      apellidos,
      email,
      contrasenya,
      direccion,
      telefono,
      codigoPostal
    }
    ]);
    setNombre("");
    setApellidos("");
    setEmail("");
    setContrasenya("");
    setDireccion("");
    setTelefono("");
    setCodigoPostal("");
  };

  return (
    <>
      <Row as="h2">Crea tu cuenta</Row>
      <Row as="section" className="formulario-incidencia">
        <Form as={Col} onSubmit={nuevoUsuario}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Nombre:</Form.Label>
              <Form.Control type="text" id="nombre" required value={nombre} onChange={getNombre} />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Apellidos:</Form.Label>
              <Form.Control type="text" id="apellidos" value={apellidos} onChange={getApellidos} />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" id="email" required value={email} onChange={getEmail} />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control type="password" id="contrasenya" required value={contrasenya} onChange={getContrasenya} />
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Label>Dirección</Form.Label>
            <Form.Control required value={direccion} id="direccion" onChange={getDireccion} />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Teléfono</Form.Label>
              <Form.Control id="telefono" value={telefono} onChange={getTelefono} />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Código Postal:</Form.Label>
              <Form.Control required id="codigoPostal" value={codigoPostal} onChange={getCodigoPostal} />
            </Form.Group>
          </Form.Row>
          <Button as={Col} md={3} className="boton-crear" onClick={nuevoUsuario} type="submit" variant="info">Registrar</Button>
        </Form>
      </Row>
    </>
  );
};
export default CrearCuentaForm;

/* const [usuario, setUsuario] = useState("");
const [formUsuario, setFormUsuario] = useState({
  nombre: "",
  apellidos: "",
  email: "",
  contrasenya: "",
  direccion: "",
  telefono: "",
  codigoPostal: ""
});
setNombre
const { formDatos, modificarDatos } = useForm(formUsuario);
console.log(usuario);
const nuevoUsuario = (e) => {
  e.preventDefault();
  setUsuario([...usuario, {
    nombre: formDatos.nombre,
    apellidos: formDatos.apellidos,
    email: formDatos.email,
    contrasenya: formDatos.contrasenya,
    direccion: formDatos.direccion,
    telefono: formDatos.telefono,
    codigoPostal: formDatos.codigoPostal
  }]);
}; */
