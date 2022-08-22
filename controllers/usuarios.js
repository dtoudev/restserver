const { response } = require("express");
const bcrypt = require("bcryptjs");

const Usuario = require("../models/usuario");

const usuariosGet = (req, res) => {
  const { id, popo } = req.query;

  res.json({
    msg: "get API - Controlador",
    q: id,
    popo: popo,
  });
};

const usuariosPut = (req, res) => {
  const id = req.params.id;

  res.json({
    msg: "put API - Controlador",
    id: id,
  });
};

const usuariosPost = async (req, res) => {
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });

  //COMPROBAR MAIL
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    return res.status(400).json({
      msg: "El correo esta ya registrado",
    });
  }

  //ENCRIPTAR LA CONTRASEÑA
  const salt = bcrypt.genSaltSync();
  usuario.password = bcrypt.hashSync(password, salt);

  await usuario.save();

  res.json({
    msg: "Usuario registrado correctamente",
    usuario,
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    msg: "delete API - Controlador",
  });
};
module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
};
