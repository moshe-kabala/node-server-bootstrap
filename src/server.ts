import { module1ConfigIo, module1Router } from './mosule1/routers';
import { Express, Application } from 'express';
import * as bodyParser from 'body-parser';
import { Server as HttpServer } from 'http';





const jsonParser = bodyParser.json();

/**
 * The server.
 *
 * @class Server
 */
export class Server {

  app: Application;
  server: HttpServer;
  io;

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
 */
  public static bootstrap(server, app: Application, io): Server {
    return new Server(server, app, io);
  }

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor(server, app, io) {
    this.server = server;
    this.app = app;
    this.io = io;

    // configure application
    this.config();

    // add routes
    this.routes();

    // add api
    // this.api();
  }

  /**
   * Create REST API routes
   *
   * @class Server
   * @method api
   */
  public api() {
    // empty for now
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   */
  public config() {

    module1ConfigIo.config(this.io);

    // mount json form parser
    this.app.use(bodyParser.json());

    // mount query string parser
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));
  }

  /**
   * Create and return Router.
   *
   * @class Server
   * @method config
   * @return void
   */
  private routes() {
    this.app.use('/profile', module1Router);
    this.app.use((req, res) => {
      res.status(400).send({ msg: 'Unknown path: ' + req.path });
    });
  }
}

