const { Schema, model } = require("mongoose");

const RoleSchame = Schema({
  rol: {
    type: String,
    required: [true, "El rol es obligatorio"],
  },
});

module.exports = model("Role", RoleSchame);
