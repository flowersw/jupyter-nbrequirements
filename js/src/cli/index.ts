/**
 * CLI.
 *
 * Command wrapper which acts as sort of a command line interface.
 *
 * @link   https://github.com/CermakM/jupyter-nbrequirements#readme
 * @file   This module implements a command wrapper.
 * @author Marek Cermak <macermak@redhat.com>
 * @since  0.0.1
 */

import Command from './command';
import { Context } from '../types';

import {
    Get,
    Set,
    Lock,
    Install,
    Kernel,
    Help,
} from './requirements'

// Wrap the cli functionality to easily handle the commands
export async function cli( command: string, args: Object, element?: HTMLDivElement, context?: Context ) {
    let cmd: Command;
    switch ( command ) {
        case 'get': cmd = new Get(); break
        case 'set': cmd = new Set(); break
        case 'lock': cmd = new Lock(); break
        case 'install': cmd = new Install(); break
        case 'kernel': cmd = new Kernel(); break

        default: cmd = new Help( command )
    }

    // Run the command
    return await cmd.run( args, element, context )
}
