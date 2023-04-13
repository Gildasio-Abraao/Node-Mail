import bodyParser from "body-parser";
import routes from "../routes";
import express from "express";
import { Express } from "express";

class App {
  server:Express = express();

  constructor() {
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(bodyParser.urlencoded({
      extended: false,
    }));
    this.server.use(bodyParser.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;