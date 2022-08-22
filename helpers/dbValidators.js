const Role = require("../models/Role");
const Usuario = require("../models/usuario");

//COMPROBAR EL ROL EN LA BBDD
const esRoleValido = async (rol = "") => {
  const existeRol = await Role.findOne({ rol });

  if (!existeRol) {
    throw new Error(`El rol '${rol}' no está en la BBDD`);
  }
};

//COMPROBAR MAIL EXISTE
const emailExiste = async (correo = "") => {
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    throw new Error(`El correo '${correo}' ya esta registrado`);
  }
};

//COMPROBAR MAIL EXISTE
const existeUsuarioPorId = async (id = "") => {
  const existeUsuario = await Usuario.findById(id);
  if (!existeUsuario) {
    throw new Error(`El id '${id}' no existe`);
  }
};

module.exports = {
  esRoleValido,
  emailExiste,
  existeUsuarioPorId,
};
