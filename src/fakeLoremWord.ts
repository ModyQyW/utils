import { fakeLoremParagraph } from './fakeLoremParagraph';

const words = fakeLoremParagraph()
  .replace(/[,.]/g, '')
  .split(' ')
  .map((word) => word.toLowerCase());

export const fakeLoremWord = () =>
  words[Math.floor(Math.random() * words.length)];
