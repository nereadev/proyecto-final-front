const FormularioPagina = () => (
  <>
    <h2>Formulario Incidencia</h2>
    <section>
      <form>
        <label htmlFor="nombre-incidenica">
          Nombre Incidencia:
          <input id="nombre-incidenica" type="text" />
        </label>
        <label htmlFor="descripcion">
          Descripción:
          <input id="descripcion" type="text" />
        </label>
        <label htmlFor="fotografía">
          Fotografía:
          <input type="file" />
        </label>
        <label htmlFor="tipo">
          Tipo:
          <select id="tipo-incidencias">
            <option value="medio-ambiente">Medio Ambiente</option>
            <option value="civismo">civismo</option>
            <option value="infraestructura">Infraestructura</option>
            <option value="otros">
              Otros:
            </option>
          </select>
        </label>
        <label htmlFor="localizacion">
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
        </label>
      </form>
    </section>
  </>
);

export default FormularioPagina;
