const domain = ['https://placekitten.com', 'https://unsplash.it'];

export const fakeAvatar = (size = 128) =>
  `${domain[Math.round(Math.random())]}/${size}`;
