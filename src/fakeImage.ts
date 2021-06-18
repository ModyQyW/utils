const domain = ['https://placekitten.com', 'https://unsplash.it'];

export const fakeImage = (width = 640, height = 480) =>
  `${domain[Math.round(Math.random())]}/${width}/${height}`;
