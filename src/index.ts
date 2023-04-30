import { Command } from 'commander';
import { getLogger } from './modules/log';
import { getDocument } from './modules/fs';
import { sortDocument } from './modules/kicad';

const log = getLogger('app');
const program = new Command('kicad-sort');

const execute = async () => {
  try {
    await program.version('0.1.0').argument('<input-file>').parseAsync();

    const [inputFile] = program.args;

    log.info(`Reading ${inputFile}...`);
    const inputDocument = await getDocument(inputFile);

    log.info(`Processing ${inputDocument.length} bytes...`);

    const sorted = await sortDocument(inputDocument);

    console.dir(sorted);
  } catch (error) {
    log.error(error.message);
    log.error(error.stack);
  }
};

execute();
