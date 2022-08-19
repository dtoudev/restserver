const { response } = require("express");

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

const usuariosPost = (req, res) => {
  const body = req.body;

  res.json({
    msg: "post API - Controlador",
    body,
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
