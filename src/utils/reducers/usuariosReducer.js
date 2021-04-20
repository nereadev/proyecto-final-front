export const usuariosReducer = (usuarios, action) => {
  switch (action.type) {
    case "cargarUsuarios":
      return { ...action.usuarios };
    default:
      return usuarios;
  }
};
