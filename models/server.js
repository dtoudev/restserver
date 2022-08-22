const cors = require("cors");
const express = require("express");
const { dbConnection } = require("../db/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    //CONEXION BBDD
    this.conectarDB();

    //MIDDLEWARES
    this.middlewares();

    //RUTAS DE LA APP
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
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
