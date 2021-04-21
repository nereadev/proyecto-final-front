export const usuarioReducer = (usuario, action) => {
  switch (action.type) {
    case "cargarUsuario":
      return { ...action.usuario };
    default:
      return usuario;
  }
};
