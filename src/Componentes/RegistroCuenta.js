import { useEffect, useState } from "react";
import {
  Button, Col, Form, Row
} from "react-bootstrap";
import useFetch from "../hooks/useFetch";
import useForm from "../hooks/useForm";

const RegistroCuenta = () => {
  const [usuario, setUsuario] = useState("");
  const {
    datos:
    nombre, apellidos, email, contrasenya, direccion, telefono, codigoPostal, pideDatos, resetDatos
  } = useFetch();
  useEffect(() => {
    if (usuario !== "") {
      pideDatos("https://api-incidencias.herokuapp.com/usuarios");
    } else {
      resetDatos();
    }
  }, [resetDatos, pideDatos, usuario]);
  const [formUsuarios, setFormUsuarios] = useState({
    nombre,
    apellidos,
    email,
    contrasenya,
    direccion,
    telefono,
    codigoPostal
  });
  /*  useEffect = (() => {
    setFormUsuarios({
      nombre,
      apellidos,
      email,
      contrasenya,
      direccion,
      telefono,
      codigoPostal
    });
  }, [nombre, apellidos, email, contrasenya, direccion, telefono, codigoPostal]) */
  const { formDatos, modificarDatos } = useForm(formUsuarios);
  const guardarUsuario = e => {
    e.prevent.default();
    return {
      nombre,
      apellidos,
      email,
      contrasenya,
      direccion,
      telefono,
      codigoPostal
    };
  };
  return (
    <>
      <Row as="h2">Crea tu cuenta</Row>
      <Row as="section" className="formulario-incidencia">
        <Form as={Col} onSubmit={guardarUsuario}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Nombre:</Form.Label>
              <Form.Control type="text" required value={formDatos.nombre} onChange={modificarDatos} />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Apellidos:</Form.Label>
              <Form.Control type="text" value={formDatos.apellidos} onChange={modificarDatos} />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" required value={formDatos.email} onChange={modificarDatos} />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control type="password" required value={formDatos.contrasenya} onChange={modificarDatos} />
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Label>Dirección</Form.Label>
            <Form.Control required value={formDatos.direccion} onChange={modificarDatos} />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Teléfono</Form.Label>
              <Form.Control value={formDatos.telefono} onChange={modificarDatos} />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Código Postal:</Form.Label>
              <Form.Control required value={formDatos.codigoPostal} onChange={modificarDatos} />
            </Form.Group>
          </Form.Row>
          <Button as={Col} md={3} className="boton-crear" type="submit" variant="info">Registrar</Button>
        </Form>
      </Row>
    </>
  );
};
export default RegistroCuenta;
