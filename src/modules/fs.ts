import { readFile } from 'node:fs/promises';

import { getLogger } from './log';

const log = getLogger('fs');

export async function getDocument(path: string): Promise<string> {
  try {
    return await readFile(path, 'utf-8');
  } catch (error) {
    log.error(error.message);
    log.error(error.stack);
  }
}
