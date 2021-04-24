/* eslint-disable no-case-declarations */
export const usuarioReducer = (usuario, action) => {
  switch (action.type) {
    case "cargarUsuario":
      return { ...action.usuario };
    case "cambiarVotos":
      const indexPar = usuario.body.usuario.incidenciasVotadas
        // eslint-disable-next-line no-confusing-arrow
        .map((incidencia, i) => (typeof incidencia === "string") ? [incidencia, i] : [incidencia._id, i])
        .filter(idIncidencia => idIncidencia[0] === action.incidenciaVotada._id);
      console.log(indexPar);
      console.log(action.incidenciaVotada._id);
      if (indexPar.length !== 0 && indexPar[0][1] > -1) {
        console.log("hola");
        usuario.body.usuario.incidenciasVotadas.splice(indexPar[0][1], 1);
      } else {
        usuario.body.usuario.incidenciasVotadas.push(action.incidenciaVotada._id);
      }
      return usuario;
    default:
      return usuario;
  }
};
