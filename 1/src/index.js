// import { unified } from 'unified';
// import remarkParse from 'remark-parse';
// import remarkGfm from 'remark-gfm';
// import remarkRehype from 'remark-rehype';
// import rehypeStringify from 'rehype-stringify';
// import { visit } from 'unist-util-visit';
// import remarkStringify from 'remark-stringify';
// import { stream } from 'unified-stream';


// const matter = require('gray-matter');

import matter from 'gray-matter';

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';

const readSourceFile = (fileName) => {
  return readFileSync(fileName, { encoding: 'utf-8' });
};

const STRING_SOURCE_PATH = '../source/simple.md';

const STRING_NMTG_PATH = '../source/01-source.md';

const STRING_NMTG_MDX_PATH = '../source/04-source.mdx';
// ../src/source.md';

// const sourceFile = 
const fileContents = readSourceFile(STRING_SOURCE_PATH);


const fileContents_nmtg = readSourceFile(STRING_NMTG_PATH);
const fileContents_mdx = readSourceFile(STRING_NMTG_MDX_PATH);



const { data, content } = matter(fileContents);





// console.log(matter(fileContents_mdx));
console.log(matter(fileContents_nmtg).content);


// console.log(
//   matter('---\ntitle: Front Matter\n---\nThis is content.')
//   );



// console.log(readSourceFile('./src/source.md'));







