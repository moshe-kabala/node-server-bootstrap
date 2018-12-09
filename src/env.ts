export namespace Env {

    export function set(args) {
        // save the mode of the process (server or script)
        process.env.mode = args['run_server'] ? 'server' : 'script';
        // if save caching
        // process.env.save_cache = args['run_server'] || args['install'] ? 'true' : '';
    }
}