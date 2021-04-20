export const incidenciasReducer = (incidencias, action) => {
  switch (action.type) {
    case "cargarIncidencias":
      return { ...action.incidencias };
    default:
      return incidencias;
  }
};
