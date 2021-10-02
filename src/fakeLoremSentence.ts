import { fakeLoremParagraph } from './fakeLoremParagraph';

const sentences = fakeLoremParagraph()
  .split(',')
  .flatMap((sentence) => sentence.split('.'))
  .map((sentence) => sentence.trim())
  .filter((sentence) => sentence !== '')
  .map((sentence) => `${sentence[0].toUpperCase() + sentence.slice(1)}.`);

export const fakeLoremSentence = () => sentences[Math.floor(Math.random() * sentences.length)];
