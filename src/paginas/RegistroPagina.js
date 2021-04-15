const RegistroPagina = () => (
  <>
    <h2>Registro</h2>
    <section>
      <form>
        <label htmlFor="nombre">
          Nombre:
          <input id="nombre" type="text" />
        </label>
        <label htmlFor="apellidos">
          Apellidos:
          <input id="apellidos" type="text" />
        </label>
        <label htmlFor="email">
          Email:
          <input id="email" type="text" />
        </label>
        <label htmlFor="contraseña">
          Contraseña:
          <input id="contraseña" type="text" />
        </label>
        <button type="submit">Regístrate</button>
      </form>
    </section>
  </>
);

export default RegistroPagina;
