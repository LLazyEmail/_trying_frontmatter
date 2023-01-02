// import { unified } from 'unified';
// import remarkParse from 'remark-parse';
// import remarkGfm from 'remark-gfm';
// import remarkRehype from 'remark-rehype';
// import rehypeStringify from 'rehype-stringify';
// import { visit } from 'unist-util-visit';
// import remarkStringify from 'remark-stringify';
// import { stream } from 'unified-stream';


const matter = require('gray-matter');

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';

const readSourceFile = (fileName) => {
  return readFileSync(fileName, { encoding: 'utf-8' });
};

const STRING_SOURCE_PATH = './src/source.md';

const STRING_NMTG_PATH = './src/source.md';
const STRING_NMTG_MDX_PATH = './src/source.md';

const sourceFile = readSourceFile('./src/source.md');









// console.log(readSourceFile('./src/source.md'));







