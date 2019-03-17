import { profileBL  } from '../bl';


export namespace module1ConfigIo {

    export function config(io) {
        const nsp = io.of('/module1');
     
        // send message in socket io when something change by listen to some bl component 
        // ProfileBL.on("action", (data) => {
        //     nsp.emit('activated profiles change', data);
        // });

        nsp.on('connection', function (socket) {
            console.log(`[socket.io]:: the web server is connected`);
        });
    }
}
