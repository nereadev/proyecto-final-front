export const usuarioReducer = async (usuario, action) => {
  switch (action.type) {
    case "cargarUsuario":
      return { ...action.usuario };
    default:
      return usuario;
  }
};
