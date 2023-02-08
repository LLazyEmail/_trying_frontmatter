import matter from 'gray-matter';

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';

const readSourceFile = (fileName) => {
  return readFileSync(fileName, { encoding: 'utf-8' });
};


const simple = () => {
  const STRING_SOURCE_PATH = './source/00-simple.md';
  // ../source/simple.md';
  const fileContents = readSourceFile(STRING_SOURCE_PATH);

  const { data, content } = matter(fileContents);
}

const nmtg_first = () => {
  const STRING_NMTG_PATH = './source/01-source.md';  
  const fileContents_nmtg = readSourceFile(STRING_NMTG_PATH);

  console.log(matter(fileContents_nmtg).content);
}

const nmtg_front_matter = () => {
  const STRING_NMTG_PATH2 = './source/03-source-front-matter.md';  
  const fileContents_nmtg_fm = readSourceFile(STRING_NMTG_PATH2);

  console.log(matter(fileContents_nmtg_fm).data.recipes);

}


const nmtg_mdx = () => {
  const STRING_NMTG_MDX_PATH = './source/04-source.mdx';  

  const fileContents_mdx = readSourceFile(STRING_NMTG_MDX_PATH);
  console.log(matter(fileContents_mdx));

}


const hn_mdx = () => {

  const STRING_HN_MDX_PATH = './source/hn.mdx';  

  const fileContents_hn_mdx = readSourceFile(STRING_HN_MDX_PATH);
  console.log(matter(fileContents_hn_mdx));

}

simple();

nmtg_first();

nmtg_front_matter();

nmtg_mdx();

hn_mdx();

// console.log(
//   matter('---\ntitle: Front Matter\n---\nThis is content.')
//   );






// console.log(readSourceFile('./src/source.md'));

// const file = matter.read('./content/blog-post.md');


