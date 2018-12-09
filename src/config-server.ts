import * as socketIo from 'socket.io';
import * as express from 'express';
import * as http from 'http';
import { Server } from './server';
const debug = require('debug')('express:server');


const port = 2222;
let server: Server;
let httpServer;
let app;
let io;

export async function init() {
    app = express();
    httpServer = http.createServer(app);
    io = socketIo(httpServer);
    server = Server.bootstrap(httpServer, app, io);

    // add error handler
    httpServer.on('error', onError);

    // start listening on port
    httpServer.on('listening', onListening);

     // listen on provided ports
     return httpServer.listen(port);
}



/**
 * Event listener for HTTP server 'error' event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server 'listening' event.
 */
function onListening() {
    const addr = httpServer.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
    console.log('Listening on ' + bind);
}
