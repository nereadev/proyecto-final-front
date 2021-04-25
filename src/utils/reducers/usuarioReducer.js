/* eslint-disable no-case-declarations */
export const usuarioReducer = (usuario, action) => {
  switch (action.type) {
    case "cargarUsuario":
      return { ...action.usuario };
    case "cambiarVotos":
      const index = usuario.body.usuario.incidenciasVotadas
        .map(incidencia => incidencia._id)
        .indexOf(action.incidenciaVotada._id);
      if (index > -1) {
        usuario.body.usuario.incidenciasVotadas.splice(index, 1);
      } else {
        usuario.body.usuario.incidenciasVotadas.push(action.incidenciaVotada);
      }
      return usuario;
    default:
      return usuario;
  }
};
