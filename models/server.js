const cors = require("cors");
const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    //MIDDLEWARES
    this.middlewares();

    //RUTAS DE LA APP
    this.routes();
  }

  middlewares() {
    //INICIALIZAMOS CORS
    this.app.use(cors());

    //LECTURA Y PARSEO DEL BODY
    this.app.use(express.json());

    //DIRECTORIO PUBLICO
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/api/usuarios", require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port);
  }
}

module.exports = Server;
