#!/usr/local/bin/node
'use strict';

// set the environment of the app before start running.

import { Env } from './env';
import { args } from './args';
Env.set(args);
import { Scripts } from './scripts';

import * as stateBl from './module/bl';


main(args);


async function main(_args) {


    // bl initialization only if install was NOT specified.
    if (!_args['install']) {
        await stateBl.init();
    }

    Scripts.run(_args);

}
