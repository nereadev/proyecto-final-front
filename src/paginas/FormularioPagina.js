import { Form } from "react-bootstrap";

const FormularioPagina = () => (
  <>
    <h2>Formulario Incidencia</h2>
    <section>
      <Form>
        <Form.Label htmlFor="nombre-incidenica">
          Nombre Incidencia:
          <input id="nombre-incidenica" type="text" />
        </Form.Label>
        <Form.Label htmlFor="descripcion">
          Descripción:
          <input id="descripcion" type="text" />
        </Form.Label>
        <Form.Label htmlFor="fotografía">
          Fotografía:
          <input type="file" />
        </Form.Label>
        <Form.Label htmlFor="tipo">
          Tipo:
          <select id="tipo-incidencias">
            <option value="medio-ambiente">Medio Ambiente</option>
            <option value="civismo">civismo</option>
            <option value="infraestructura">Infraestructura</option>
            <option value="otros">
              Otros:
            </option>
          </select>
        </Form.Label>
        <Form.Label htmlFor="localizacion">
          Localización:
          <select id="tipo-localizacion">
            <option value="localizacion-manual">
              Introducir datos
              {/*        <label htmlFor="codigo-postal">
                Código Postal:
                <input type="text" />
              </label>
              <label htmlFor="direccion">
                Dirección:
                <input type="text" />
              </label>
              <label htmlFor="comentarios">
                Comentarios:
                <input type="text" />
              </label> */}
            </option>
            <option value="localizacion-ubicacion">Usar Ubicación</option>
          </select>
        </Form.Label>
      </Form>
    </section>
  </>
);

export default FormularioPagina;
