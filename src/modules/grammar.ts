import { join } from 'path';
import peggy, { Parser } from 'peggy';
import { TsPegjs } from 'ts-pegjs';
import { fileURLToPath } from 'url';

import { getLogger } from './log.js';
import { getDocument } from './fs.js';

const log = getLogger('grammar');

export async function createParser(): Promise<Parser> {
  try {
    const grammar = await getDocument(
      join(
        fileURLToPath(import.meta.url),
        '..',
        '..',
        'src',
        'modules',
        'grammar.pegjs'
      )
    );

    return peggy.generate(grammar, {
      output: 'parser',
      plugins: [new TsPegjs()]
    });
  } catch (error) {
    log.error(error.message);
    log.error(error.stack);
  }
}
