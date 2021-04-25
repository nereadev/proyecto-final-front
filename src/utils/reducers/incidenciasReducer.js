export const incidenciasReducer = (incidencias, action) => {
  switch (action.type) {
    case "cargarIncidencias":
      return { ...action.incidencias };
    case "cambiarVotos":
      incidencias.body.incidencias.map(incidencia => {
        if (incidencia._id === action.incidenciaVotada._id) {
          incidencia.votos = action.sumaVoto ? incidencia.votos + 1 : incidencia.votos - 1;
        }
        return incidencia;
      });
      return incidencias;
    default:
      return incidencias;
  }
};
