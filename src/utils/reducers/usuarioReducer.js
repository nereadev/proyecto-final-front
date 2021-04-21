export const usuarioReducer = async (usuario, action) => {
  switch (action.type) {
    case "cargarUsuario":
      console.log(action.usuario);
      return { ...action.usuario };
    default:
      return usuario;
  }
};
