// import SExpr from 's-expression.js';

// const parser = new SExpr();

// type RecursiveArray = Array<Array<string> | string>;

// export function sortDocument(document: string): string {
//   const results: RecursiveArray = parser.parse(document);

//   for (const key of results) {
//     let newKey = '';
//     const entries = new Map();
//     if (Array.isArray(key)) {
//       // todo: ham
//     } else if (typeof key === 'string' || typeof key === 'number') {
//       newKey = key;
//     } else {
//       process.exit(-1);
//     }
//   }

//   console.dir(results);

//   return '';
// }

import { createParser } from './grammar.js';

export async function sortDocument(doc: string): Promise<string> {
  const parser = await createParser();
  const result = parser.parse(doc);

  console.dir(result);

  return '';
}
