import { ArgumentParser } from 'argparse';

export let args;

export namespace Args {
    args = prepare();

    export function prepare() {

        const parser = new ArgumentParser({
            addHelp: true,
            description: 'manages the system configuration, and state of the system engines'
        });

        parser.addArgument(
            ['-i', '--install'],
            {
                help: 'first installation. setting up mongodb configuration',
                action: 'storeTrue'
            }
        );

        parser.addArgument(
            ['--create-mock'],
            {
                help: 'create mock for testing',
            }
        );

        parser.addArgument(
            ['--run-server'],
            {
                help: 'starts the server',
                action: 'storeTrue'
            }
        );

        const localArgs = parser.parseArgs();
        const isAnyArgsDefined = Object.keys(localArgs).some(key => localArgs[key]);
        localArgs['run_server'] = localArgs['run_server'] || !isAnyArgsDefined;
        return localArgs;
    }
}
