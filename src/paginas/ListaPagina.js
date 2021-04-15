const ListaPagina = () => (
  <>
    <h2>Lista de Incidencias Generales</h2>
    <section>
      <form>
        <label htmlFor="filrar-tipos">
          Filtrar:
          <select id="filtros">
            <option value="filtro-tipo">Tipo Incidencia</option>
            {/*          <select id="tipo-incidencia">
              <option value="medio-ambiente">Medio Ambiente</option>
              <option value="civismo">civismo</option>
              <option value="infraestructura">Infraestructura</option>
              <option value="otros">Otros:</option>
            </select> */}
            <option value="filtro-localizacion">Localización</option>
          </select>
        </label>
        <label htmlFor="ordenar-por">
          Ordenar por:
          <select id="relevancia">
            <option value="relevancia">Relevancia</option>
            <option value="fecha">Fecha</option>
          </select>
        </label>
        <input type="text" />
      </form>
    </section>
    <section>
      <ul>
        <li>
          <p>Nombre incidencia</p>
          <p>Tipo incidencia</p>
          <p>Descripción Incidencia</p>
          <p>Favorito</p>
        </li>
      </ul>
    </section>
  </>
);

export default ListaPagina;
